iconsDirectory = "./450-test/icons/"
const locations = [{
    title: 'The Castle',
    coords: {
        lat: 51.5721,
        lng: -0.3400
    },
    icon: iconsDirectory+'music.png'
},
{
    title: 'The Band Stand',
    coords: {
        lat: 51.570709547070194,
        lng: -0.33953382679834193
    },
    icon: iconsDirectory+'music.png'
},
{
    title: 'The Park Drive',
    coords: {
        lat: 51.57107799697978,
        lng: -0.33864699551627864
    },
    icon: iconsDirectory+'drama.png'
},
{
    title: 'The Roof Terrace',
    coords: {
        lat: 51.572615028201376,
        lng: -0.3381793112539503
    },
    icon: iconsDirectory+'music.png'
},
{
    title: 'The Old House',
    coords: {
        lat: 51.572306622419745,
        lng: -0.337707242462523
    },
    icon: iconsDirectory+'drama.png'
},
{
    title: 'Speech Room',
    coords: {
        lat: 51.57388032088066,
        lng: -0.3365924234147868
    },
    icon: iconsDirectory+'drama.png'
},
{
    title: 'Vaughan Library “Forecourt”',
    coords: {
        lat: 51.5729784615626,
        lng: -0.33683114001183134
    },
    icon: iconsDirectory+'drama.png'
},
{
    title: 'Behind the Vaughan',
    coords: {
        lat: 51.57288677430271,
        lng: -0.3364073509924032
    },
    icon: iconsDirectory+'drama.png'
},
{
    title: 'The Head Master’s Yard',
    coords: {
        lat: 51.57256920155196,
        lng: -0.33677481362631606
    },
    icon: iconsDirectory+'drama.png'
},
{
    title: 'War Memorial Building Forecourt',
    coords: {
        lat: 51.57334270818231,
        lng: -0.3370028013856397
    },
    icon: iconsDirectory+'drama.png'
},
{
    title: 'Bill Yard',
    coords: {
        lat: 51.57317433825023,
        lng: -0.3374212259876906
    },
    icon: iconsDirectory+'music.png'
},
{
    title: 'Druries Steps',
    coords: {
        lat: 51.572975960994754,
        lng: -0.3373541707638017
    },
    icon: iconsDirectory+'drama.png'
},
{
    title: 'Art Schools',
    coords: {
        lat: 51.57465043293017,
        lng: -0.33585118104491185
    },
    icon: iconsDirectory+'arts.png'
},
{
    title: 'Passmore Gallery',
    coords: {
        lat: 51.5741953456611,
        lng: -0.3362347369255564
    },
    icon: iconsDirectory+'arts.png'
},
{
    title: 'Grove Hill Portaloos',
    coords: {
        lat: 51.573988106438506,
        lng: -0.33615847667901955
    },
    icon: iconsDirectory+'wc.png'
},
{
    title: 'Harrow Park Portaloos',
    coords: {
        lat: 51.56982528515575,
        lng: -0.3391569089820675
    },
    icon: iconsDirectory+'wc.png'
},
{
    title: 'London Community Kitchen',
    coords: {
        lat: 51.57150259260376,
        lng: -0.33864416430660427
    },
    icon: iconsDirectory+'food.png'
},
{
    title: 'Picnic Area',
    coords: {
        lat: 51.572578688703,
        lng: -0.3376919801021046
    },
    icon: iconsDirectory+'picnic.png'
}
];

var mymap = L.map('map')

// var myIcon = L.icon({
//     iconUrl: '/static/favicon.ico',
//     iconSize: [30, 30]
// });

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHlsYW5rMTIzIiwiYSI6ImNrajUwMm55NzV0NWwyc2xiNzk0OHFjdXoifQ.cIzWvi9HlI1YfhpY24KbTA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'dylank123/ckl2u73iy1s5v17tjzyld3nzl',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

locations.forEach(location => {

    var icon = L.icon({
        iconUrl: location.icon,
        //shadowUrl: 'leaf-shadow.png',

        iconSize: [25, 25], // size of the icon
        // shadowSize:   [50, 64], // size of the shadow
        // iconAnchor:   [12.5, 12.5], // point of the icon which will correspond to marker's location
        // shadowAnchor: [4, 62],  // the same for the shadow
        // popupAnchor:  [12.5, 12.5] // point from which the popup should open relative to the iconAnchor
    });

    var marker = L.marker([location.coords.lat, location.coords.lng], { icon: icon }).addTo(mymap).bindPopup(location.title);
});

mymap.setView([51.57281743898807, -0.3371716811246794], 17);

// shows user's location on map
// function onLocationFound(e) {
//     var radius = e.accuracy / 2;

//     var locationMarker = L.marker(e.latlng).addTo(mymap)
//         .bindPopup('You are within ' + radius + ' meters from this point').openPopup();

//     var locationCircle = L.circle(e.latlng, radius).addTo(mymap);
// }

// function onLocationError(e) {
//     alert(e.message);
// }

// mymap.on('locationfound', onLocationFound);
// mymap.on('locationerror', onLocationError);

// mymap.locate({ setView: true, maxZoom: 16 });
