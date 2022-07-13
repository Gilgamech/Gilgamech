

function initMap(){$canvas.rent=[];$canvas.rent.mapLoc = {lat: 47, lng: -122};$canvas.rent.map = new google.maps.Map(document.getElementById('map'), {zoom: 8,center: $canvas.rent.mapLoc});$canvas.rent.marker = new google.maps.Marker({position: $canvas.rent.mapLoc,map: $canvas.rent.map})};

$canvas.rent=[]; $canvas.rent.mapCenter = {lat: 47, lng: -122}; function initMap(){$canvas.rent.map = new google.maps.Map(document.getElementById('map'), {zoom: 10,center: $canvas.rent.mapCenter});}; function addMarker($lat,$lng,$title){;$canvas.rent.marker = new google.maps.Marker({position: {lat: $lat, lng: $lng},map: $canvas.rent.map,title:$title})}; var saleLocations = [{'lat':47.612149,'lng':-122.329712,'price':'$475,000'}, {'lat':47.43227,'lng':-120.3441,'price':'$305,000'}, {'lat':46.1941931481713,'lng':-119.257999793824,'price':'$274,900'}, {'lat':46.2718,'lng':-119.30831,'price':'$235,000'}, {'lat':47.8778,'lng':-121.8741,'price':'$225,000'}, {'lat':48.36712,'lng':-122.64438,'price':'$162,500'}, {'lat':47.69872,'lng':-117.46932,'price':'$135,000'}, {'lat':48.06162,'lng':-117.74114,'price':'$68,500'}, {'lat':47.6130983,'lng':-122.3394215,'price':'$,540,000'}, {'lat':47.700808,'lng':-122.2863689,'price':'$750,000'}, {'lat':47.9010001,'lng':-122.6781968,'price':'$469,900'}, {'lat':47.637688,'lng':-117.222862,'price':'$439,900'}, {'lat':47.0907254,'lng':-122.7759114,'price':'$419,990'}, {'lat':46.175125,'lng':-122.940605,'price':'$369,900'}, {'lat':45.7059938,'lng':-122.669813,'price':'$337,500'}, {'lat':47.4999902,'lng':-122.3176712,'price':'$312,000'}, {'lat':48.2411164,'lng':-122.701749,'price':'$290,000'}, {'lat':45.723827,'lng':-122.649409,'price':'$215,000'}]; var rentalLocations = [{'lat':47.6196595,'lng':-122.3218535,'price':'$1,740 - $2,500'}, {'lat':47.621519,'lng':-122.355807,'price':'$1,805 - $3,300'}, {'lat':47.6191124,'lng':-122.3459073,'price':'$1,925 - $7,520'}, {'lat':47.6158467,'lng':-122.3334478,'price':'$1,755 - $3,385'}, {'lat':47.6024495,'lng':-122.3208957,'price':'$1,815 - $5,950'}, {'lat':47.6119117,'lng':-122.3454488,'price':'$1,413 - $3,147'}, {'lat':47.5377258,'lng':-122.2803812,'price':'$1,760 - $3,320'}, {'lat':47.6253528,'lng':-122.320846,'price':'$1,646 - $2,565'}, {'lat':47.717859,'lng':-122.2943837,'price':'$1,424 - $3,357'}, {'lat':47.659425,'lng':-122.3425601,'price':'$1,780 - $3,165'}, {'lat':47.6479615,'lng':-122.3567085,'price':'$2,125 - $3,000'}, {'lat':47.623719,'lng':-122.3359958,'price':'$1,175 - $1,250'}, {'lat':47.6189029,'lng':-122.3050238,'price':'$1,546 - $3,474'}, {'lat':47.6168246,'lng':-122.3470117,'price':'$1,402 - $2,089'}, {'lat':47.6153241,'lng':-122.3450206,'price':'$1,850 - $3,034'}, {'lat':47.6211715,'lng':-122.3334134,'price':'$1,519 - $2,248'}, {'lat':47.669111,'lng':-122.3772868,'price':'$1,565 - $2,465'}, {'lat':47.605117,'lng':-122.3271494,'price':'$1,805 - $3,185'}, {'lat':47.6203748,'lng':-122.3333454,'price':'$1,375 - $5,175'}, {'lat':47.6133201,'lng':-122.3189839,'price':'$1,791 - $9,051'}, {'lat':47.6063434,'lng':-122.3381982,'price':'$1,677 - $1,991'}, {'lat':47.6201665,'lng':-122.3584514,'price':'$1,719 - $2,351'}]; for (loc in saleLocations) {addMarker(saleLocations[loc].lat,saleLocations[loc].lng,saleLocations[loc].price)}; for (loc in rentalLocations) {addMarker(rentalLocations[loc].lat,rentalLocations[loc].lng,rentalLocations[loc].price)} 




function addMarker($lat,$lng,$title){
	$canvas.rent.mapLoc = {lat: $lat, lng: $lng};
	$canvas.rent.marker = new google.maps.Marker({position: $canvas.rent.mapLoc,map: $canvas.rent.map,title:$title})
};

var ibOptions = {
disableAutoPan: false,
maxWidth: 0,
pixelOffset: new google.maps.Size(-140, 0),
zIndex: null,
boxStyle: {
padding: "0px 0px 0px 0px",
width: "252px",
height: "40px"
},
closeBoxURL : "",
infoBoxClearance: new google.maps.Size(1, 1),
isHidden: false,
pane: "floatPane",
enableEventPropagation: false
};

google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
var source   = $("#infobox-template").html();
var template = Handlebars.compile(source);
var boxText = document.createElement("div");
boxText.style.cssText = "margin-top: 8px; background: #fff; padding: 0px;";
boxText.innerHTML = template(subSet[i]);
ibOptions.content = boxText
var ib = new InfoBox(ibOptions);
ib.open(map, marker);
map.panTo(ib.getPosition());
}
}));

