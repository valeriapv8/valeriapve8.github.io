/*Mapa*/
var mymap = L.map('mapid').setView([-17.782701, -63.182127], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(mymap);

L.marker([-17.782701, -63.182127]).addTo(mymap)
    .bindPopup("<b>Clice Company</b> está <br />Localizado en Santa Cruz, Bolivia.").openPopup();

mymap.scrollWheelZoom.disable();
mymap.touchZoom.disable();