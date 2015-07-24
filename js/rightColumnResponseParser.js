/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var rightColumnResponseParser = {
    templateId: '#rightColumnResultTemplate',
    jqueryObject: 0,
    data: {},
    emptyTemplate: "",
    actuallPage: 1,
    pagesLimit: 1,
    fillTemplateWithData: function (id, object, show) {
        this.jqueryObject.find('.mapSearchResultObjectCotainer').attr('data-id', id);
        if (show === false) {
            this.jqueryObject.find('.mapSearchResultObjectCotainer').hide();
        }
        id = 'carousel-' + id;
        this.jqueryObject.find('.carousel').attr('id', id);
        this.jqueryObject.find('.left').attr('href', '#' + id);
        this.jqueryObject.find('.right').attr('href', '#' + id);
        this.jqueryObject.find('.price').text(object.price);
        this.jqueryObject.find('.title').text(object.locationArea);
        this.jqueryObject.find('.name').html(object.locationCity);
        this.jqueryObject.find('img.userImg').attr('src', object.ownerImage);
        var carousel = this.jqueryObject.find('.carousel-inner');
        for (picId = 0; picId < object.pictures.length; picId++) {
            var active = picId === 0 ? ' active' : '';
            var text = '<div class="item' + active + '" data-slide-number="' + picId + '">'
                    + '<img class="property-picture" src="' + object.pictures[picId] + '" alt=""></div>';
            carousel.append(text);
        }
        $('.rightColumnContainer').append(this.jqueryObject.html());
        this.jqueryObject.html(this.emptyTemplate);
    },
    addObjects: function () {
        for (i = 0; i < this.data.length; i++) {
            var show = i >= 2 ? false : true;
            this.fillTemplateWithData(i, this.data[i], show);
        }
    },
    showObjects: function () {
        var number = this.actuallPage;
        $('.mapSearchResultObjectCotainer').hide(200);
        $('.mapSearchResultObjectCotainer[data-id="' + (number * 2 - 1) + '"]').show(200);
        $('.mapSearchResultObjectCotainer[data-id="' + (number * 2) + '"]').show(200);
    },
    createPagination: function () {
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
            if(next >= 1){
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
    init: function () {
        this.jqueryObject = $(this.templateId);
        this.emptyTemplate = this.jqueryObject.html();
        var self = this;
        $.ajax({
            url: "/maps/ajax/adviseResponse.php",
            method: "POST",
        }).done(function (data) {
            data = $.parseJSON(data);
            self.data = data;
            self.addObjects();
            self.createPagination();
            $('.carousel').hover(
                    function () {
                        $(this).find('.carousel-control').fadeIn(250);
                    },
                    function () {
                        $(this).find('.carousel-control').fadeOut(250);
                    }
            );

            $('.slider').hover(
                    function () {
                        $(this).find('.slider-control').fadeIn(250);
                    },
                    function () {
                        $(this).find('.slider-control').fadeOut(250);
                    }
            );
            $('.carousel').carousel();
            setInterval(function(){$('.preloader').hide();}, 1000);
        });
        return this;
    }
};