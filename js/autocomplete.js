/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var autocomplete = {
    miniSearch: '#miniSearchInput',
    //miniSearchUrl: 'http://angular-search.aszmyd.sites.polcode.net/api/data-mini.json',
    miniSearchUrl: '/maps/ajax/miniSearchResponse.php',
    miniSearchTags: [],
    fullSearch: '#fullSearchInput',
    //fullSearchUrl: 'http://angular-search.aszmyd.sites.polcode.net/api/data-search.json',
    fullSearchUrl: '/maps/ajax/fullSearchResponse.php',
    fullSearchTags: [],
    data: [],
    mindata: [],
    showOnPage: 2,
    pagesLimit: 1,
    actuallPage: 1,
    createPagination: function(){
        $('.pagination').html('');
        var pages = this.pagesLimit;
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
    itemFullView: function (item, show) {
        show = (show !== true) ? 'display:none;' : '';
        return '<a><div style="height: 150px; padding-bottom: 10px;' + show + '"><img style="height: 100%;" src="' + item.img + '" alt="Not found">' + item.title + '</div></a>';
    },
    itemMiniView: function (item) {
        return '<a><div><img style="" src="' + item.img + '" alt="Not found">' + item.title + '</div></a>';
    },
    prepareFullSearchAutocomplete: function () {
        var array = [];
        for (var i = 0; i < this.data.length; i++) {
            this.fullSearchTags[this.data[i].title] = [this.data[i].title, this.data[i]];
            array[i] = this.data[i].title;
        }
        var self = this;
        var object = 0;
        $(this.fullSearch).autocomplete({
            source: array,
            response: function (event, ui) {
                if (ui.content.length === 0) {
                    $('#searchResults').text("No results found");
                } else {
                    $('#searchResults').html('<div class="pagination"></div>');
                    
                }
            }
        }).data("ui-autocomplete")._renderItem = (function (ul, item) {
            object = object + 1;
            var nitem = self.fullSearchTags[item.value];
            var obj = $("<li>");
            obj.css('height', '0');
            obj.css('display', 'none');
            $('.ui-widget-content').css('background', 'white !important');
            
            $('#searchResults').prepend(self.itemFullView(nitem[1], object > self.showOnPage));
            return obj.data("ui-autocomplete-item", item)
                    .append(self.itemFullView(nitem[1]))
                    .appendTo(ul);
        });
    },
    prepareMiniSearchAutocomplete: function () {
        var array = [];
        for (var i = 0; i < this.mindata.length; i++) {
            this.miniSearchTags[this.mindata[i].title] = [this.mindata[i].title, this.mindata[i]];
            array[i] = this.mindata[i].title;
        }
        var self = this;

        $(this.miniSearch).autocomplete({
            source: array
        }).data("ui-autocomplete")._renderItem = (function (ul, item) {
            var nitem = self.miniSearchTags[item.value];
            $('.ui-widget-content').css('background', 'white !important');
            return $("<li>").data("ui-autocomplete-item", item)
                    .append(self.itemMiniView(nitem[1]))
                    .appendTo(ul)
        });
    },
    prepareFullSearchData: function () {
        var self = this;
        $.ajax({
            url: self.fullSearchUrl,
            method: "POST"
        }).done(function (data) {
            data = $.parseJSON(data);
            self.data = data;
            self.prepareFullSearchAutocomplete();
        });
    },
    prepareMiniSearchData: function () {
        var self = this;
        $.ajax({
            url: self.miniSearchUrl,
            method: "POST"
        }).done(function (data) {
            data = $.parseJSON(data);
            self.mindata = data;
            self.prepareMiniSearchAutocomplete();
        });
    },
    initialize: function () {
        this.prepareFullSearchData();
        this.prepareMiniSearchData();
        $('.ui-menu-item').hide();
        $(this.fullSearch).on('input', function (e) {
            setInterval(function () {
                var obj = $('.ui-autocomplete');
                var classActive = 'activeoncontainer';
                if (obj.is(':visible')) {
                    if (!obj.hasClass(classActive)) {
                        obj.addClass(classActive);
                    }
                }
                else {
                    if (obj.hasClass(classActive)) {
                        obj.removeClass(classActive);
                    }
                }
            }, 200);
        });
    }
};

