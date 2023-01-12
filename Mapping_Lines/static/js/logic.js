// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6214, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6214, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//     color: "yellow"
//   }).addTo(map);

// Skill Drill: Create an airline route from SFO to JFK with 2 stops, Austin-Bergstorom International Airport (AUS) and Toronto Pearson Airport (YYZ).
// Make the route a blue dashed line, with a weight of 4, and a map opacity of  0.5 

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([40.7, -94.5], 5);

// Coordinates for each point to be used in the polyline.
// Bonus add additional coordinates. 
// Coordinates added for St. Louis International Airport(STL) and Nashville International Airport (BNA).
let line = [
    [37.6214, -122.3790],
    [30.1975, -97.6664],
    [38.7499, -90.3748],
    [36.1263, -86.6774],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// Create a dashed polyline using the line coordinates and make the line blue with a weight of 4.
L.polyline(line, {
    color: "blue",
    weight: 4,
    dashArray: '20,20',
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY,
    opacity: 0.5
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);