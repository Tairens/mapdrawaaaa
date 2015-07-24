/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mapResponseParser = {
    templateId: 'script[type="text/template"]#searchResultTemplate',
    jqueryObject: 0,
    data: {},
    emptyTemplate: "",
    map: "",
    actuallPage: 1,
    markers: [],
    showObjects: function () {
        $('.rightMenuElement').hide(200);
        for(var i = 0; i < 8; i ++){
            var number = this.actuallPage * 8 + i;
            $('.rightMenuElement[data-id="' + (number) + '"]').show(200);
        }
    },
    createMarker: function (object) {
        var self = this;
        var myLatlng = new google.maps.LatLng(object.lat, object.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: self.map,
            title: object.title,
            icon: object.marker,
            animation: google.maps.Animation.DROP,
        });
        
        var infowindow = new google.maps.InfoWindow({
            content: self.fillTemplateWithData(object)
        });
        google.maps.event.addListener(marker, 'click', function () {
            self.addObjects();
            self.createPagination();
           var obj = $('.rightMenuElement[data-title="' + marker.title + '"]');
           obj.addClass('active');
        });
        google.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(self.map, marker);
        });
        google.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
        });
        marker.infowindow = infowindow;
        return marker;
    },
    createPagination: function(){
        $('.pagination').html('');
        var pages = this.data.length / 2 + 1;
        this.pagesLimit = pages - 1;
        var text = '<li><a href="#" class="previous" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
        for (i = 1; i < pages; i++) {
            text += '<li><a class="paginationObject" href="#" data-id="' + i + '">' + i + '</a></li>';
        }
        text += '<li><a href="#" class="next aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'
        $('.pagination').append(text);
        var self = this;
        $('.previous').click(function (event) {
            event.preventDefault();
            var next = self.actuallPage - 1;
            if(next > 0){
                self.actuallPage = next;
                self.showObjects();
            }
            
        });
        $('.next').click(function (event) {
            event.preventDefault();
            var next = self.actuallPage + 1;
            if(next <= self.pagesLimit){
                self.actuallPage = next;
                self.showObjects();
            }
            
        });
        $('.paginationObject').click(function (event) {
            event.preventDefault();
            var page = parseInt($(this).attr('data-id'));
            if(self.actuallPage !== page){
                self.actuallPage = page;
                self.showObjects();
            }
        });
    },
    fillTemplateWithData: function (object) {
        var obj = $('#pointerClickTemplate').html();
        $('.popupWindowContainer').css('background-image', "url(" + object.pictures[0] + ")");
        var rt = $('#pointerClickTemplate').html();
        $('#pointerClickTemplate').html(obj);
        return rt;
    },
    addObject: function (id, object, rowid) {
        var obj = $('#rightElementTemplate');
        var text = obj.html();
        var rightElem = obj.find('.rightMenuElement');
        rightElem.attr('data-id', id - 1);
        rightElem.attr('data-row-id', rowid);
        rightElem.attr('data-title', object.title);
        
        obj.find('.rightMenuImage > img').attr('src', object.pictures[0]);
        obj.find('.rightMenuTitle').html(object.title);
        obj.find('.rightMenuSubtitle').html(object.title);
        $('.rightColumnContainer').append(obj.html());
        $('#rightElementTemplate').html(text);        
    },
    addObjects: function () {
        var container = $('.rightColumnContainer');
        $('.pagination').hide();
        container.hide();
        $('.rightColumnContainer').html('');
        for (i = 0; i < this.data.length; i++) {
            this.addObject(i+1, this.data[i], this.markers.length - 1);
        }
        setInterval(function(){container.show(600);$('.pagination').show();}, 600);
        var self = this;
        $('.rightMenuElementClick').click(function(event){
            event.preventDefault();
            var id = $(this).find('.rightMenuElement').attr('data-id');
            var rowid = $(this).find('.rightMenuElement').attr('data-row-id');
            self.closeAllInfowindow();
            self.markers[rowid][id].infowindow.open(self.map, self.markers[rowid][id]);
        });
    },
    closeAllInfowindow: function(){
        for(var rowid = 0; rowid < this.markers.length; rowid++){
            for(var id = 0; id < this.markers[rowid].length; id++){
                this.markers[rowid][id].infowindow.close();
            }
        }
    },
    addMarkers: function () {
        var array = [];
        for (i = 0; i < this.data.length; i++) {
            array[i] = this.createMarker(this.data[i]);
        }
        this.markers[this.markers.length] = array;
    },
    removeMarkers: function(){
        var array = this.markers[this.markers.length - 1];
        for (i = 0; i < array.length; i++) {
            array[i].setMap(null);
        }
        this.markers.pop();
    },
    init: function (map, coords) {
        $('.preloader').show();
        var self = this;
        this.map = map;
        this.jqueryObject = $(this.templateId);
        this.emptyTemplate = this.jqueryObject.html();
        $.ajax({
            url: "/maps/ajax/response.php",
            data: coords,
            method: "POST"
        }).done(function (data) {
            data = $.parseJSON(data);
            self.data = data;
            self.addMarkers();
            $('.rentalsClass > .aerialTextClass').html('Rentals available ' + data.length);
            $('.rentalsClass').show();
            setInterval(function(){$('.preloader').hide()}, 1000);
        });
        return this;
    }
};