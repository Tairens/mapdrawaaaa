var mapObject = {
    mapOptions: {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
        disableDefaultUI: true
    },
    rightColumn: 0,
    map: 0,
    drawingManager: 0,
    polygons: [],
    mapResponse: 0,
    getArea: function (coords) {
        var arr = {
            xmin: coords[0].A,
            xmax: coords[0].A,
            ymin: coords[0].F,
            ymax: coords[0].F
        };
        for (var i = 0; i < coords.length; i++) {
            var object = coords[i];
            if (object.A > arr.xmax) {
                arr.xmax = object.A;
            }
            else if (object.A < arr.xmin) {
                arr.xmin = object.A;
            }
            if (object.F > arr.ymax) {
                arr.ymax = object.F;
            }
            else if (object.F < arr.ymin) {
                arr.ymin = object.F;
            }
        }
        return arr;
    },
    init: function () {
        this.rightColumn = rightColumnResponseParser.init();
        this.map = new google.maps.Map(document.getElementById('map-canvas'), this.mapOptions);
        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: false,
            polygonOptions: {
                fillColor: '#e95b29',
                strokeColor: '#ff0000',
                strokeWeight: 4
            }
        });
        var centerControlDiv = document.createElement('div');
        centerControlDiv.style.width = "100%";
        centerControlDiv.index = 1;
        var centerControl = this.CenterControl(centerControlDiv, this.map, this.drawingManager, this.polygons);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
        return this;
    },
    disable: function () {
        this.map.setOptions({
            draggable: false,
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: false
        });
        this.map.setOptions({draggableCursor: "url('http://i.stack.imgur.com/EA3Ix.gif'), default"});
    },
    enable: function () {
        this.map.setOptions({
            draggable: false,
            zoomControl: false,
            scrollwheel: true,
            disableDoubleClickZoom: true
        });
        this.map.setOptions({draggableCursor: "default"});
    },
    drawFreeHand: function (map, array) {
        poly = new google.maps.Polyline({map: map, clickable: false});
        //move-listener
        var move = google.maps.event.addListener(map, 'mousemove', function (e) {
            poly.getPath().push(e.latLng);
        });
        var self = this;
        google.maps.event.addListenerOnce(map, 'mouseup', function (e) {
            google.maps.event.removeListener(move);
            var path = poly.getPath();
            poly.setMap(null);
            var theArrayofLatLng = path.j;
            var ArrayforPolygontoUse = GDouglasPeucker(theArrayofLatLng, 50);
            var polyOptions = {
                map: map,
                fillColor: '#e85b29',
                fillOpacity: 0.7,
                strokeColor: '#AA2143',
                strokeWeight: 2,
                clickable: false,
                zIndex: 1,
                path: ArrayforPolygontoUse,
                editable: false
            }

            poly = new google.maps.Polygon(polyOptions);
            array[array.length] = poly;
            google.maps.event.clearListeners(map.getDiv(), 'mousedown');
            self.enable();
            var area = self.getArea(ArrayforPolygontoUse);
            self.mapResponse = mapResponseParser.init(self.map, area);
            self.drawingManager.setDrawingMode(null);
        });
        return poly;
    },
    CenterControl: function (controlDiv, map, drawingManager, polises) {
        var controlUI = document.createElement('div');
        controlUI.className = "zoomClass";
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);
        // Set CSS for the control interior
        var controlText = document.createElement('div');
        controlText.className = "zoomTextClass";
        controlText.innerHTML = '+';
        controlUI.appendChild(controlText);
        var controlUI2 = document.createElement('div');
        controlUI2.className = "zoomClass";
        controlUI2.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI2);
        // Set CSS for the control interior
        var controlText2 = document.createElement('div');
        controlText2.className = "zoomTextClass";
        controlText2.innerHTML = '-';
        controlUI2.appendChild(controlText2);
        var controlUI3 = document.createElement('div');
        controlUI3.className = "aerialClass";
        controlUI3.title = 'Aerial';
        controlDiv.appendChild(controlUI3);
        var controlText3 = document.createElement('div');
        controlText3.className = "aerialTextClass";
        controlText3.innerHTML = 'Aerial';
        controlUI3.appendChild(controlText3);
        var controlUI4 = document.createElement('div');
        controlUI4.className = "aerialClass";
        controlUI4.title = 'Polygon';
        controlDiv.appendChild(controlUI4);
        var controlText4 = document.createElement('div');
        controlText4.className = "aerialTextClass";
        controlText4.innerHTML = 'Polygon';
        controlUI4.appendChild(controlText4);
        var controlUI5 = document.createElement('div');
        controlUI5.className = "aerialClass";
        controlUI5.title = 'Erase';
        controlDiv.appendChild(controlUI5);
        var controlText5 = document.createElement('div');
        controlText5.className = "aerialTextClass";
        controlText5.innerHTML = 'Erase';
        controlUI5.appendChild(controlText5);
        var controlUI6 = document.createElement('div');
        controlUI6.className = "rentalsClass";
        controlDiv.appendChild(controlUI6);
        var controlText6 = document.createElement('div');
        controlText6.className = "aerialTextClass";
        controlUI6.appendChild(controlText6);
        
        var self = this;
        google.maps.event.addDomListener(controlUI, 'click', function () {
            self.map.setZoom(self.map.getZoom() + 1);
        });
        google.maps.event.addDomListener(controlUI2, 'click', function () {
            self.map.setZoom(self.map.getZoom() - 1);
        });
        google.maps.event.addDomListener(controlUI3, 'click', function () {
            if (controlText3.innerHTML === 'Aerial') {
                controlText3.innerHTML = 'Map';
                self.map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
            }
            else {
                controlText3.innerHTML = 'Aerial';
                self.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
            }
        });
        var array = polises;
        google.maps.event.addDomListener(controlUI4, 'click', function () {
            self.disable();
            google.maps.event.addDomListener(map.getDiv(), 'mousedown', function (e) {
                var obj = self.drawFreeHand(self.map, array);
            });
        });
        google.maps.event.addDomListener(controlUI5, 'click', function () {
            array.pop().setMap(null);
            self.mapResponse.removeMarkers();
            $('.rightColumnContainer').html('');
            $('.pagination').html('');
            $('.preloader').show();
            $('.rentalsClass > .aerialTextClass').html('');
            console.log($('#preloader').html());
            self.rightColumn = rightColumnResponseParser.init();
        });
    },
    initilizeMap: function () {
        this.drawingManager.setMap(this.map);
        this.drawingManager.setDrawingMode(null);
    }
};
var obj = mapObject.init();

google.maps.event.addDomListener(window, 'load', function(){obj.initilizeMap()});
