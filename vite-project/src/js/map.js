//<!-- https://softauthor.com/show-user-location-on-google-maps-using-javascript/ -->

navigator.geolocation.getCurrentPosition(
  function (position) {
    initMap(position.coords.latitude, position.coords.longitude);
  },
  function errorCallback(error) {
    console.log(error);
  }
);

function initMap(lat, lng) {
  var myLatLng = {
    lat,
    lng,
  };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
    mapTypeControl: false,
  });

   var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
   });
  
  const iconSnowflake = "../src/images/SNOWFLAKE.png";
  const biggestIconSnowflake = "../src/images/SNOWFLAKE@3x.png";

   var markerA = new google.maps.Marker({
    position: {lat: 59.31659359085035, lng: 18.041815542691243},
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });

  var markerB = new google.maps.Marker({
    position: { lat: 59.31686639105647, lng: 18.033475947597925 },
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });

  calculateNearestBooth(myLatLng);

}

function calculateNearestBooth(myLatLng){
  
  //calculate nearest marker
  const markers = [
    {
      name: "first marker",

      position: new google.maps.LatLng(59.31659359085035, 18.041815542691243),

      distance: google.maps.geometry.spherical.computeDistanceBetween(
        myLatLng,
        new google.maps.LatLng(59.31659359085035, 18.041815542691243)
      ),
    },

    {
      name: "second marker",

      position: new google.maps.LatLng(59.31686639105647, 18.033475947597925),

      distance: google.maps.geometry.spherical.computeDistanceBetween(
        myLatLng,
        new google.maps.LatLng(59.31686639105647, 18.033475947597925)
      ),
    },
  ];

  console.log(markers);

  const markersWithDistance = markers.map((marker) => {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      myLatLng,
      marker.position
    );

    return { marker, distance: distance};
  });

  console.log(markersWithDistance);

  const markersByDistance = markersWithDistance.sort((a, b) => {
    return a.distance - b.distance;
  });

  console.log(markersByDistance[0]);

  const closestMarker = markersByDistance[0];

  console.log("closest marker is: ", closestMarker, "the name of the marker is: ", closestMarker.marker.name);


 //   //not working - should place new icon for closest marker...:
   var setIcon = new google.maps.Marker({
     position: closestMarker,
     map: map,
     title: "Nearest Artic Well",
     icon: biggestIconSnowflake,
   });
   setIcon.setMap(map);

}