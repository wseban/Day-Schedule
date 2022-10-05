/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

//query the sections and establish variable I will need
var today = moment().format("MM/DD/YYYY");
var weekday = moment().weekday()
$("#currentDay").text(today);
console.log(today);

$("#currentDay").attr("font-weight", "bold")

//run a function that changes the class from past present and future based on the time
//if 0000 to 9 all have class of future, 1700-2359 all have past 

$(function (){
    $(".hour").addClass("future").removeClass("hour");
})

//figure out moment.js and displaying current day... changing on new day
// need to wrap everything in function and continuously run moment every hour or so...

//utilize bootstrap to form time blocks within .container 9-5(standard business)
//figure out how to integrate current time to show as colored blocks



//utilize a save block that will save information printed
//event listener on save button  
//save what information is printed aka item.val() within each time block so that is it always there unless deleted
console.log(moment())
