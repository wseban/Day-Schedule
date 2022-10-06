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
var today = moment().format("dddd, MM/DD/YYYY");
$("#currentDay").text(today);
//console.log(startTime);
//var am9 = 
var hoursArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var space9 = $("#9");
var space10 = $("#10");
var space11 = $("#11");
var space12 = $("#12");
var space13 = $("#13");
var space14 = $("#14");
var space15 = $("#15");
var space16 = $("#16");
var space17 = $("#17");


console.log(moment(currentHour))


var currentHour = moment().format("H")// 16,17 etc
changeColor();
function changeColor(){
    if (currentHour < 9){
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour === 9){
        $("#9").attr("class", "present  col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour === 10){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
     else if (currentHour === 11){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour === 12){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour === 13){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "past col-10");
        $("#13").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour ===  14){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "past col-10");
        $("#13").attr("class", "past col-10");
        $("#14").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour ===15){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "past col-10");
        $("#13").attr("class", "past col-10");
        $("#14").attr("class", "past col-10");
        $("#15").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour === 16){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "past col-10");
        $("#13").attr("class", "past col-10");
        $("#14").attr("class", "past col-10");
        $("#15").attr("class", "past col-10");
        $("#16").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour === 17){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "past col-10");
        $("#13").attr("class", "past col-10");
        $("#14").attr("class", "past col-10");
        $("#15").attr("class", "past col-10");
        $("#16").attr("class", "past col-10");
        $("#17").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else{
        $(".description").attr("class", "past description col-10");
    }
        // everything before 13 past everything after 13 future and 13 = present
    }



    


/*for (i = 0; i < scheduleArr.length; i++){
    if($(scheduleArr[i]).moment().format("H") === currentHour){
        $(".hour").addClass("present").removeClass("future");
    }
    else if($(scheduleArr[i]).moment().format("H") > currentHour){
        $(scheduleArr[i]).addClass("future").removeClass("past");
    }
    else{
        $(scheduleArr[i]).addClass("present").removeClass("hour");
    }
}*/


console.log(currentHour)



$(".saveBtn9").on("submit", "#toDo9", function(e){
    e.preventDefault();
    var toDoList = localStorage.setItem("schedule9", JSON.stringify())
})
    

//run a function that changes the class from past present and future based on the time
//if 0000 to 9 all have class of future, 1700-2359 all have past 

//$(function (){


    
//})
//var startTime = moment().format(09:00:);

//figure out moment.js and displaying current day... changing on new day
// need to wrap everything in function and continuously run moment every hour or so...

//utilize bootstrap to form time blocks within .container 9-5(standard business)
//figure out how to integrate current time to show as colored blocks



//utilize a save block that will save information printed
//event listener on save button  
//save what information is printed aka item.val() within each time block so that is it always there unless deleted


