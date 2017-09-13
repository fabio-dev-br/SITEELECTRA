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
var locations = [
{
  lat: -22.970722,
  lng: -43.182365,
  info: "<strong>Rio de Janeiro, Brasil</strong><br />International Broadcast Centre (IBC)<br /><a class='page-scroll' href='#américa'>ver projeto</a>"
},
{
  lat: -17.3489,
  lng: -44.9468,
  info: "<strong>Pirapora, Brasil</strong><br />Pirapora I, II, III<br /><a class='page-scroll' href='#américa'>ver projeto</a>"
},
{
  lat: 18.5007759,
  lng: -67.0243462,
  info: "<strong>Isabela, Puerto Rico</strong><br />Isabela I, II<br /><a class='page-scroll' href='#américa'>ver projeto</a>"

},
{
  lat: 54.63612276415955,
  lng: -1.5992986515586836,
  info: "<strong>School Aycliffe, England</strong><br />School Aycliffe<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 53.17043751029692,
  lng: -2.852840717171148,
  info: "<strong>Westwood Farm, England</strong><br />Westwood Farm<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 52.62851508952642,
  lng: -2.733168046180026,
  info: "<strong>Pitchford, England</strong><br />Pitchford<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 52.52677434780475,
  lng: -0.9490753192756074,
  info: "<strong>Meadow, England</strong><br />Meadow<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 52.252880518856095,
  lng: -1.5558408915811697,
  info: "<strong>Brickyard Farm, England</strong><br />Brickyard Farm<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 52.35488882948041,
  lng: -0.07606846022895297,
  info: "<strong>Wigginhill, England</strong><br />Wigginhill<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 52.86236162066244,
  lng: 0.7699697088335142,
  info: "<strong>South Creake, England</strong><br />South Creake<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 52.576897979503066,
  lng: 1.3847408743507685,
  info: "<strong>Avenue Solar Park, England</strong><br />Avenue Solar Park<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 51.93810692738992,
  lng: 0.3969402444663501,
  info: "<strong>Hydes Farm, England</strong><br />Hydes Farm<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 51.915583216966944,
  lng: 1.154890327178009,
  info: "<strong>Green Farm, England</strong><br />Green Farm<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 51.35591195368754,
  lng: 0.6885889017855789,
  info: "<strong>Bobbing Solar Park, England</strong><br />Bobbing Solar Park<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 51.32499002105889,
  lng: 1.1245519512044666,
  info: "<strong>Woodlands, England</strong><br />Woodlands<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 51.3387595813001,
  lng: 1.3471511272883845,
  info: "<strong>Thorne Farm, England</strong><br />Thorne Farm<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 51.64420791054971,
  lng: -3.9978444154232875,
  info: "<strong>Cocket Valley, England</strong><br />Cocket Valley<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 51.62167256637813,
  lng: -3.0770836552909486,
  info: "<strong>Cwrt Henllys, England</strong><br />Cwrt Henllys<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 51.6202930443747,
  lng: -2.9876302894509763,
  info: "<strong>Park Farm West, England</strong><br />Park Farm West<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 51.37105921348374,
  lng: -2.8809872101924157,
  info: "<strong>Wick Road, England</strong><br />Wick Road<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 51.05625686890246,
  lng: -2.320117188208769,
  info: "<strong>Manor Farm, England</strong><br />Manor Farm<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 50.834173630020274,
  lng: -3.776139664824882,
  info: "<strong>Sharland, England</strong><br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 50.41972757843158,
  lng: -3.7601831009586704,
  info: "<strong>Hazard Farm, England</strong><br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 44.23295597096536,
  lng: 23.6663334565784,
  info: "<strong>Podari, ROMANIA</strong><br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 39.601708056374356,
  lng: 20.279759334696337,
  info: "<strong>Ravago Group, Greece</strong><br /><a class='page-scroll' href='#euro'>ver projeto</a>"
}, 
{
  lat: 38.632561119425006,
  lng: 21.413933257083954,
  info: "<strong>Agrinio, Greece</strong><br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 39.3478788010931,
  lng: 22.404783952997377,
  info: "<strong>Epilektos, Greece</strong><br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 38.462907350877536,
  lng: 23.120846918967004,
  info: "<strong>Kastro, Greece</strong><br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 38.12515662758959,
  lng: 23.561044834843415,
  info: "<strong>Attica Drinking Water Proccessing Center, Greece</strong><br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 38.104593918630236,
  lng: 23.557826184025544,
  info: "<strong>Dimoulas S.A. Special Cables Logistics Center</strong><br />Aspropyrgos, Greece<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 38.09972600486773,
  lng: 23.592148876156898,
  info: "<strong>Mercedes-Benz Hellas Logistics Center</strong><br />Aspropyrgos, Greece<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 38.11326135230558,
  lng: 23.765743347935086,
  info: "<strong>Olympic Village, Athens</strong><br />Greece<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 38.080595371858635,
  lng: 23.76983069914786,
  info: "<strong>General Oncological Hospital of Kiffisia, Athens</strong><br />Greece<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 38.07497156667649,
  lng: 23.820799109822246,
  info: "<strong>Semiramis Hotel, Athens</strong><br />Greece<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 37.98159973991962,
  lng: 23.753655021412214,
  info: "<strong>Embassy of the United States, Athens</strong><br />Greece<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 37.94245270153864,
  lng: 23.69741762174317,
  info: "<strong>Onassis Cardiac Surgery Center, Athens</strong><br />Greece<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 37.94689108225032,
  lng: 23.663876595767988,
  info: "<strong>Karaiskaki Stadium, Athens</strong><br />Greece<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 37.92722951525944,
  lng: 23.945257822683743,
  info: "<strong>Athens International Airport - Eleftherios Venizelos</strong><br />Greece<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 35.092493930800465,
  lng: 33.34786223001947,
  info: "<strong>Tseri</strong><br />Cyprus<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 37.21590873011984,
  lng: 34.99884734477155,
  info: "<strong>Demirçit Mahallesi</strong><br />Turkey<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

},
{
  lat: 43.40728130373868,
  lng: 39.95852887733463,
  info:"<strong>Sochi 2014 - International Broadcast</strong><br />Rússia<br /><a class='page-scroll' href='#euro'>ver projeto</a>"
},
{
  lat: 37.66217597667015,
  lng: 128.66910574395752,
  info:"<strong>PyeongChang 2018 - International Bradcast Center (IBC)</strong><br />South Korea<br /><a class='page-scroll' href='#euro'>ver projeto</a>"

}
];

google.maps.event.addDomListener(window, "load", initMap);
