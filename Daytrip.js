"use strick"
let destination = ["Utah", "California"," Las Vegas", "Colorado", "Arizona"]
let restaurants = [" Heart Attack Grill"," Picnic","Sushi","Nacho Daddy","Bar and Grill"]
let transportation = ["walk","car","Uber","bike","bus"]
let activities = ["Watch a Movie", "Go on a Hike", "Sports event", "Dancing", "Paintballing"]

function randomDestination(location){
   let randomNumber = Math.floor(Math.random() *5)
   let destinationSelection = location[randomNumber];
   return destinationSelection 
}
let selectedDestination = randomDestination(destination)
console.log(selectedDestination)


// console.log(Math.floor(Math.random() *5 + 1))

// console.log(destination[Math.floor(Math.random() *5)])