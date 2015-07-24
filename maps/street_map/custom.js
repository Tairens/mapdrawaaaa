$(function () {

    var main_seller = {
        lat: -12.043343,
        lng: -77.028343,
        title: 'Main seller here - centered on the map',
        pictures: 'http://www.panic.com/blog/wp-content/themes/panic/images/icon_smile2.png',
        marker: 'http://www.panic.com/blog/wp-content/themes/panic/images/icon_smile2.png'
    }

    var similler_sellers = [
        {
            lat: -12.05,
            lng: -77.04,
            title: 'Pictures here',
            pictures: [
                'http://www.panic.com/blog/wp-content/themes/panic/images/icon_smile2.png',
                'http://www.panic.com/blog/wp-content/themes/panic/images/icon_smile2.png',
                'http://www.panic.com/blog/wp-content/themes/panic/images/icon_smile2.png'
            ],
            marker: 'http://www.panic.com/blog/wp-content/themes/panic/images/icon_smile2.png'
        },
        {
            lat: -12.04,
            lng: -77.03,
            title: 'broken images links here',
            pictures: ['http://img.example.com/11.png', 'http://img.example.com/12.png', 'http://img.example.com/13.png'],
        }
    ];

    mapper = new Mapper();

    mapper.setMainSellerData(main_seller);
    mapper.setSimillarSellersData(similler_sellers);
    mapper.initializeMap('#map');
    mapper.setMarkers();

});


window.Mapper = {};
Mapper = function () {};

Mapper.prototype = {
    map: null,

    inputObj: [{
        lat: 0,
        lng: 0,
        title: 'Title',
        marker: '',
        infoWindow: {
            content: ''
        }
    }],

    mainSeller: {},

    simillarSellersData: [],

    initializeMap: function (mapId) {
        this.map = new GMaps({
            el: mapId,
            lat: this.mainSeller.lat,
            lng: this.mainSeller.lng
        });
    },

    setMainSellerData: function (sellerData) {
        this.mainSeller = $.extend({}, this.inputObj, sellerData);
        this.mainSeller = this.getSingleOutputObject(this.mainSeller);
    },

    setSimillarSellersData: function (sellersData) {
        if ($.isArray(sellersData)) {
            this.inputObj = $.extend([], this.inputObj, sellersData);
            var outputArr = [];
            var parent = this;
            $.each(this.inputObj, function (index, inputObject) {
                parent.simillarSellersData.push(parent.getSingleOutputObject(inputObject));
            })
        } else {
            this.inputObj[0] = $.extend({}, this.inputObj[0], sellersData);
            this.simillarSellersData.push(this.getSingleOutputObject(this.inputObj[0]));
        }
    },

    setMarkers: function () {
        this.map.addMarker(this.mainSeller);
        this.map.addMarkers(this.simillarSellersData);
    },

    getSingleOutputObject: function (inputObject) {
        var output = {};
        output.lat = inputObject.lat;
        output.lng = inputObject.lng;
        output.title = inputObject.title;
        output.icon = inputObject.marker;

        var content = $('<div/>');
        $('<h3 />', {text: inputObject.title})
            .addClass('popup-title')
            .appendTo(content);

        if ($.isArray(inputObject.pictures)) {
            $.each(inputObject.pictures, function (index, value) {
                $("<img src=" + value + " />")
                    .addClass('popup-image')
                    .appendTo(content);
            })

        } else {
            $("<img src=" + inputObject.pictures + " />")
                .addClass('popup-image')
                .appendTo(content);
        }

        output.infoWindow = {
            content: '<div class="popup">' + content.html() + '</div>'
        };

        return output;
    },

};

