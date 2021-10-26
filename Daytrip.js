"use strick"
let area= ["Utah", "California","Las Vegas", "Colorado", "Arizona"]
let food = ["Heart Attack Grill","Picnic","Sushi","Nacho Daddy","Bar and Grill"]
let trans = ["walk","car","Uber","bike","bus"]
let thingsToDo = ["Watch a Movie", "Go on a Hike", "Sports event", "Dancing", "Paintballing"]


 function randomSelection(array){
    return array [Math.floor(Math.random() *array.length)]
    }
    let selectedDestination="1.Destination"+" "+ randomSelection(area);
    
    let selectedRestaurant="2.Restaurant"+" "+ randomSelection(food);
    
    let selectedTransportation="3.Transportation"+" "+ randomSelection(trans);
    
    let selectedactivities="4.Activity"+" "+ randomSelection(thingsToDo);
    


    let arr = [selectedDestination, selectedRestaurant, selectedTransportation,selectedactivities]
        let finalOption=""
        for (let i = 0; i< arr.length; i++){
        finalOption += arr[i] + "\n";
        }


    function pickFeatureToChange () {
    let Answer = prompt("what would you like to change?");
    if(Answer === "Destination" ||Answer ===  "1" ||Answer ===  "1.Destination" ){
        selectedDestination = ("1.Destination" +" " +randomSelection(area))
            let arr = [selectedDestination, selectedRestaurant, selectedTransportation,selectedactivities]
            let finalOption=""
            for (let i = 0; i< arr.length; i++)
            finalOption += arr[i] + "\n";

            alert(finalOption);
        }
    else if  (Answer === "Restaurant" ||Answer ===  "2" ||Answer ===  "2.Resturant"){
            selectedRestaurant = ("2. Resturant" +" " +randomSelection(food))
            let arr = [selectedDestination, selectedRestaurant, selectedTransportation,selectedactivities]
            let finalOption=""
            for (let i = 0; i< arr.length; i++)
            finalOption += arr[i] + "\n";

            alert(finalOption)
        }
     else if (Answer === "Transportation" ||Answer ===  "3" ||Answer ===  "3.Transportation"){
            selectedTransportation = ("3.Transportation" +" " +randomSelection(trans))
            let arr = [selectedDestination, selectedRestaurant, selectedTransportation,selectedactivities]
            let finalOption=""
            for (let i = 0; i< arr.length; i++)
            finalOption += arr[i] + "\n";

            alert(finalOption) 
        }  
    else if  (Answer === "Activity" ||Answer ===  "4" ||Answer ===  "4.Activity"){
            selectedactivities =("4.Activity" + " "+ randomSelection(thingsToDo))
            let arr = [selectedDestination, selectedRestaurant, selectedTransportation,selectedactivities]
            let finalOption=""
            for (let i = 0; i< arr.length; i++)
            finalOption += arr[i] + "\n";

            alert(finalOption)

        }
    else {
            pickFeatureToChange
        }
    }
    alert(finalOption);
 function checkForTripSatisfaction (){
     let whenComplete = false;
     while(whenComplete === false){

        

        let question = prompt("Would you like to change anything? yes or no?");

        if (question === "no"){ 
            whenComplete = true;

            alert(finalOption);
        }
            
        else {(question === "yes");
            pickFeatureToChange();
        }
    }    
}
checkForTripSatisfaction();