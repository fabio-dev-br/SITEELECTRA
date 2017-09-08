function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {
      lat: 34.5133,
      lng:  -94.1629
    }
  });
  var infoWin = new google.maps.InfoWindow();
  // Add markers to the map.
  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });

}
var locations = [{
  lat: 37.983810,
  lng: 23.727539,
  info: "Athens, Greece"
}, {
  lat: 37.94745,
  lng: 23.63708,
  info: "Piraeus,Greece"
}, {
  lat: 50.942061,
  lng: -2.633308,
  info: "Yeovil, UK"
},];

google.maps.event.addDomListener(window, "load", initMap);
