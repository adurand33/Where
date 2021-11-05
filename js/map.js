mapboxgl.accessToken = 'pk.eyJ1IjoiYWR1cmFuZDMzIiwiYSI6ImNrdmh4bWhsMDJoM3QydnBndnZxb29zY3UifQ.u0Sef1nlxi55JJ7fCSKI8A';

// san francisco

let deyoung = {lng: -122.46872660608807, lat: 37.77174080952735}; // de young museum

goMap(deyoung, 12);

mydivid = document.getElementById('mydiv');

mydivid.style.display = 'none';

// mark map

function markMap(geoloc) {

  const opacity = '.8';

  let lng = geoloc.lng;
  let lat = geoloc.lat;

  const mark = new mapboxgl.Marker({color: `rgba(255, 0, 1, ${opacity})`});

  mark.setLngLat([lng, lat]);

  return mark;
}

// go on map

function goMap(geoloc, scale) {

  var mymap = new mapboxgl.Map({

    container: 'mymap',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [geoloc.lng,  geoloc.lat],
    zoom: scale
  });

  var mark = markMap(geoloc);

  mark.addTo(mymap);
}
