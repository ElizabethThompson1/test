"use strick"
let destination = ["Utah", "California","Las Vegas", "Colorado", "Arizona"]
let restaurants = [" Heart Attack Grill","Picnic","Sushi","Nacho Daddy","Bar and Grill"]
let transportation = ["walk","car","Uber","bike","bus"]
let activities = ["Watch a Movie", "Go on a Hike", "Sports event", "Dancing", "Paintballing"]

function randomDestination(location){
   let randomNumber = Math.floor(Math.random() *5)
   let destinationSelection = location[randomNumber];
   return destinationSelection 
}
let selectedDestination = randomDestination(destination)
console.log(selectedDestination)

// console.log(Math.floor(Math.random() *5 + 1)) gives me a random numner
// console.log(destination[Math.floor(Math.random() *5)]) 

function randomRestaurant (place){
    let randomNumberFood = Math.floor(Math.random() *5)
    let restaurantOption = place[randomNumberFood];
    return restaurantOption
}
let selectedRestaurant = randomRestaurant(restaurants)
console.log(selectedRestaurant)

function randomtransportation(howToGetAround){
    let numberTransportation = Math.floor(Math.random() *5)
    let transportationOptions= howToGetAround[numberTransportation];
    return transportationOptions
}
let selectedTransportation = randomtransportation(transportation)
console.log(selectedTransportation)

function randomactivities (funThingsToDo){}