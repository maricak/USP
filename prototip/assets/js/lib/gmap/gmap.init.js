(function ($) {

    // var map;
    // $(document).ready(function () {
    //     map = new GMaps({
    //         el: '#basic-map',
    //         lat: 41.970133,
    //         lng: -87.6500523,
    //         zoomControl: true,
    //         zoomControlOpt: {
    //             style: 'LARGE',
    //             position: 'TOP_LEFT'
    //         },
    //         panControl: false,
    //         streetViewControl: false,
    //         mapTypeControl: false,
    //         overviewMapControl: false
    //     });
    // });


    var map, infoWindow;
    $(document).ready(function () {
        infoWindow = new google.maps.InfoWindow({});
        map = new GMaps({
            el: '#map-2',
            zoom: 11,
            lat: 41.850033,
            lng: -87.6500523,
            click: function (e) {
                // alert("new trash at location " + e.latLng + "is added");
                placeMarker(e.latLng, this);
            }
        });
        map.loadFromFusionTables({
            query: {
                select: '\'Geocodable address\'',
                from: '1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg'
            },
            suppressInfoWindows: true,
            events: {
                click: function (point) {
                    infoWindow.setContent('You clicked here!');
                    infoWindow.setPosition(point.latLng);
                    infoWindow.open(map.map);
                }
            }
        });
        // This event listener calls addMarker() when the map is clicked.
        map.addListener('click', function (e) {
            placeMarker(e.latLng, map);
        });

        function placeMarker(position, map) {
            var infowindow = new google.maps.InfoWindow({
                content: 'New trash can is added!'
            });
            $('#bootstrap-data-table > tbody:last-child').append('<tr>...</tr><tr>...</tr><tr>...</tr><tr>...</tr><tr>...</tr>');


            var marker = new google.maps.Marker({
                position: position,
                map: map,
            });
            infowindow.open(map, marker);
            map.panTo(position);
        }
    });
})(jQuery);
