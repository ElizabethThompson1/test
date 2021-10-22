"use strick"
let destination = ["Utah", "California","Las Vegas", "Colorado", "Arizona"]
let restaurants = ["Heart Attack Grill","Picnic","Sushi","Nacho Daddy","Bar and Grill"]
let transportation = ["walk","car","Uber","bike","bus"]
let activities = ["Watch a Movie", "Go on a Hike", "Sports event", "Dancing", "Paintballing"]

function randomDestination(location){
   let randomNumber = Math.floor(Math.random() *5)
   let destinationSelection = location[randomNumber];
   return destinationSelection 
}
let selectedDestination = randomDestination(destination)


// console.log(Math.floor(Math.random() *5 + 1)) gives me a random numner
// console.log(destination[Math.floor(Math.random() *5)]) 

function randomRestaurant (place){
    let randomNumberFood = Math.floor(Math.random() *5)
    let restaurantOption = place[randomNumberFood];
    return restaurantOption
}
let selectedRestaurant = randomRestaurant(restaurants)


function randomtransportation(howToGetAround){
    let numberTransportation = Math.floor(Math.random() *5)
    let transportationOptions= howToGetAround[numberTransportation];
    return transportationOptions
}
let selectedTransportation = randomtransportation(transportation)
n)

function randomactivities (funThingsToDo){
    let randomNumberActivities = Math.floor(Math.random() *5)
    let activitiesOptions = funThingsToDo[randomNumberActivities]
    return activitiesOptions
}
let selectedactivities = randomactivities(activities)


function dayTripWasSelectedOrNot (answer){
    if(answer === "yes"){
        console.log("The Perfect Daytrip!")}
     else{
       console.log ("Let's try again!")
        }
    
}
dayTripWasSelectedOrNot(prompt("Do you like this day trip? Yes or No?"))
