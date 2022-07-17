import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";
import { start } from "repl";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

var routes: number[][] = [[]];

async function init(): Promise<any> {
  const routess: any = {1:[[30.63867839654099, 76.82250234187782] , [30.721901913805297, 76.75962792681186]  , [30.68351485679853, 76.86757735537014] ,  [30.707226001197565, 76.7079744283328] ,  [30.63867839654099, 76.82250234187782]],2:[[30.63867839654099, 76.82250234187782] , [30.721901913805297, 76.75962792681186]  , [30.68351485679853, 76.86757735537014] ,  [30.707226001197565, 76.7079744283328] ,  [30.63867839654099, 76.82250234187782]],3:[[30.63867839654099, 76.82250234187782] , [30.721901913805297, 76.75962792681186]  , [30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],4:[[30.63867839654099, 76.82250234187782] , [30.721901913805297, 76.75962792681186]  , [30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],5:[[30.63867839654099, 76.82250234187782] , [30.721901913805297, 76.75962792681186]  , [30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],6:[[30.63867839654099, 76.82250234187782] , [30.721901913805297, 76.75962792681186]  , [30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],7:[[30.63867839654099, 76.82250234187782] , [30.721901913805297, 76.75962792681186]  , [30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],8:[[30.63867839654099, 76.82250234187782] , [30.721901913805297, 76.75962792681186]  , [30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],9:[[30.674905344605826, 76.74105831304233],[30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],10:[[30.674905344605826, 76.74105831304233],[30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],11:[[30.674905344605826, 76.74105831304233],[30.68351485679853, 76.86757735537014] ,   [30.63867839654099, 76.82250234187782]],12:[[30.674905344605826, 76.74105831304233],[30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],13:[[30.674905344605826, 76.74105831304233],[30.68351485679853, 76.86757735537014] ,  [30.63867839654099, 76.82250234187782]],14:[[30.674905344605826, 76.74105831304233],[30.668094305703818, 76.78594586700788]],};
    
  const veh_no: any = {1:"PB01C3966",2:"PB01C3966",3:"PB01C3966",4:"PB01C3966",5:"PB01C3966",6:"PB01C3966",7:"PB01C3966",8:"PB01C3966",9:"PB01C3966",10:"PB01C3966",11:"PB01C3966",12:"PB01C3966",13:"PB01C3966",14:"PB01C3966",};
  const bottom_left: any = {1:"01-06-2022 11:00",2:"02-06-2022 07:30",3:"03-06-2022 07:00",4:"04-06-2022 06:30",5:"05-06-2022 06:30",6:"06-06-2022 06:30",7:"07-06-2022 08:00",8:"08-06-2022 07:30",9:"09-06-2022 08:50",10:"10-06-2022 08:45",11:"11-06-2022 09:00",12:"12-06-2022 09:00",13:"13-06-2022 09:00",14:"14-06-2022 10:15",};
  const center_text: any = {1:"01-06-2022 11:00 0km/h 91km",2:"02-06-2022 07:30 0km/h 76km",3:"03-06-2022 07:00 0km/h 57km",4:"04-06-2022 06:30 0km/h 51km",5:"05-06-2022 06:30 0km/h 46km",6:"06-06-2022 06:30 0km/h 42km",7:"07-06-2022 08:00 0km/h 24km",8:"08-06-2022 07:30 0km/h 36km",9:"09-06-2022 08:50 0km/h 53km",10:"10-06-2022 08:45 0km/h 77km",11:"11-06-2022 09:00 0km/h 64km",12:"12-06-2022 09:00 0km/h 73km",13:"13-06-2022 09:00 0km/h 91km",14:"14-06-2022 10:15 0km/h 57km",};
  const bottom_right: any = {1:"01-06-2022 22:30",2:"02-06-2022 22:30",3:"03-06-2022 23:00",4:"04-06-2022 22:30",5:"05-06-2022 10:20",6:"06-06-2022 00:30",7:"07-06-2022 17:00",8:"08-06-2022 16:00",9:"09-06-2022 19:00",10:"10-06-2022 19:00",11:"11-06-2022 19:00",12:"12-06-2022 19:00",13:"13-06-2022 21:00",14:"14-06-2022 12:30",};


var text = "date";
  for (var i = 1; i <= 14; i++) {
    routes = routess[i];
    console.log("route" + routes);
    initMap();
    document.getElementById('veh-no').innerHTML = veh_no[i];
    document.getElementById('center-text').innerHTML = center_text[i];
    document.getElementById('bottom-left').innerHTML = bottom_left[i];
    document.getElementById('bottom-right').innerHTML = bottom_right[i];
    await new Promise((f) => setTimeout(f, 7000));


  }
}


  

function initMap(): void {
  const route: any = routes;
  console.log(route);
  const journey: any = journeyConstructor(route);
  const directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: false,
    markerOptions: {
      visible: true,
      optimized: false,
      clickable: true,
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Google_Maps_pin.svg",
    },
    draggable: true,
    polylineOptions: {
      strokeColor: "#4285F4",
      strokeWeight: 5,
      strokeOpacity: 0.8,
    },
    preserveViewport: false,
  });
  const directionsService = new google.maps.DirectionsService();
  console.log("j origin" + JSON.stringify(journey.origin));
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 13,
      center: journey.origin,
    }
  );

  directionsRenderer.setMap(map);

  journeyConstructor(route);
  calculateAndDisplayRoute(directionsService, directionsRenderer, journey);
  (document.getElementById("mode") as HTMLInputElement).addEventListener(
    "change",
    () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer, journey);
    }
  );
}

function randomInRange(min, max) {
  return Math.random() < 0.5
    ? (1 - Math.random()) * (max - min) + min
    : Math.random() * (max - min) + min;
}

function latlongConverter(latlong: any) {
  console.log(latlong);
  try {
    const lat: number = latlong[0];
    const long: number = latlong[1];
    const latlongArray: any = { lat: lat, lng: long };
    return latlongArray;
  } catch (e) {
    console.log(e);
  }
}

function randomWaypoints(randomWayPoints: any) {
  const randomWaypointsArray: any = [];

  for (let i = 0; i < randomWayPoints.length; i++) {
    randomWaypointsArray.push({
      location: latlongConverter(randomWayPoints[i]),
      stopover: true,
    });
  }

  return randomWaypointsArray;
}

function journeyConstructor(journeyArray: any) {
  const startpoint: number[] = journeyArray[0];
  console.log("start" + journeyArray[0]);
  const endpoint: number[] = journeyArray[journeyArray.length - 1];
  console.log(endpoint);
  const waypoints: number[] = journeyArray.slice(1, -1);
  console.log(waypoints);
  const waypointsArray: any = [];

  for (let i = 0; i < waypoints.length; i++) {
    console.log("way points" + waypoints[i]);

    var decision = Math.random();

    console.log(
      "changed randomness " +
        randomInRange(startpoint[0], endpoint[0]) +
        "  " +
        randomInRange(startpoint[1], endpoint[1]) +
        "unchanged randomness  " +
        waypoints[i]
    );

    for (let f = 0; f < randomInRange(1, 2); f++) {
      {
        waypointsArray.push({
          location: latlongConverter([
            randomInRange(startpoint[0], startpoint[0] + 0.03),
            randomInRange(startpoint[1], startpoint[1] + 0.03),
          ]),
          stopover: false,
        });
      }
    }

    waypointsArray.push({
      location: latlongConverter(waypoints[i]),
      stopover: false,
    });
  }

  const proccessed: any = {
    origin: latlongConverter(startpoint),
    destination: latlongConverter(endpoint),
    waypoints: waypointsArray,
  };

  return proccessed;
}

function calculateAndDisplayRoute(
  directionsService: google.maps.DirectionsService,
  directionsRenderer: google.maps.DirectionsRenderer,
  journeyArray: any
) {
  const selectedMode = (document.getElementById("mode") as HTMLInputElement)
    .value;

  directionsService
    .route({
      origin: journeyArray.origin, // Haight.
      destination: journeyArray.destination, // Ocean Beach.
      waypoints: journeyArray.waypoints,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode["DRIVING"],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + e));
}

declare global {
  interface Window {
    init: () => void;
  }
}
window.init = init;
export {};
function delay(arg0: number) {
  throw new Error("Function not implemented.");
}
