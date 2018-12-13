document.addEventListener('DOMContentLoaded', function () {

    // sidenav initialization
    const sidenav_init = M.Sidenav.init(document.querySelectorAll('.sidenav'), {});

    // scrollspy initialization
    const scrollspy_init = M.ScrollSpy.init(document.querySelectorAll('.scrollspy'), {
        scrollOfset: 100
    });


    // nav solid after scroll
    const main_nav = document.querySelector('.transparent');
    document.addEventListener('scroll', function () {
        if (window.scrollY <= 100) {
            main_nav.style = `background-color: rgba(40, 40, 100, ${window.scrollY/100}) !important;`
        } else if (window.scrollY > 100) {
            main_nav.style = `background-color: rgba(40, 40, 100, 1) !important;`
        }
    });

    //google maps
    const position = [42.361145, -71.057083];
    const centerPosition = [42.377815, -70.981133];

    function showGoogleMaps() {
        // map positions
        const latLng = new google.maps.LatLng(position[0], position[1]);
        const centerLatLng = new google.maps.LatLng(centerPosition[0], centerPosition[1]);

        const mapOptions = {
            zoom: 12,
            streetViewControl: false,
            scaleControl: true,
            mapTypeId: google.maps.mapTypeId.ROADMAP,
            center: centerLatLng
        }

        // create map
        map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

        // show marker
        marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP
        });

        // maps event
        google.map.event.addDomListener(window, 'load', showGoogleMaps);
    }



});