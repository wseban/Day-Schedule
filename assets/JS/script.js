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
var save9 = $("#save9");
var space10 = $("#10");
var save10 = $("#save10");
var space11 = $("#11");
var save11 = $("#save11");
var space12 = $("#12");
var save12 = $("#save12");
var space13 = $("#13");
var save13 = $("#save13");
var space14 = $("#14");
var save14 = $("#save14");
var space15 = $("#15");
var save15 = $("#save15");
var space16 = $("#16");
var save16 = $("#save16");
var space17 = $("#17");
var save17 = $("#save17");


console.log(moment(currentHour))

// if (localStorage.getItem("9am")){
    var updateSpace9 = JSON.parse(localStorage.getItem("9am", space9.val()))
    space9.text(updateSpace9)
    var updateSpace10 = JSON.parse(localStorage.getItem("10am", space10.val()))
    space10.text(updateSpace10)
    var updateSpace11 = JSON.parse(localStorage.getItem("11am", space11.val()))
    space11.text(updateSpace11)
    var updateSpace12 = JSON.parse(localStorage.getItem("12pm", space12.val()))
    space12.text(updateSpace12)
    var updateSpace13 = JSON.parse(localStorage.getItem("1pm", space13.val()))
    space13.text(updateSpace13)
    var updateSpace14 = JSON.parse(localStorage.getItem("2pm", space14.val()))
    space14.text(updateSpace14)
    var updateSpace15 = JSON.parse(localStorage.getItem("3pm", space15.val()))
    space15.text(updateSpace15)
    var updateSpace16 = JSON.parse(localStorage.getItem("4pm", space16.val()))
    space16.text(updateSpace16)
    var updateSpace17 = JSON.parse(localStorage.getItem("5pm", space17.val()))
    space17.text(updateSpace17)
// }


var currentHour = moment().format("H")// 16,17 etc
changeColor();
function changeColor(){
    if (currentHour < 9){
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour == 9){
        $("#9").attr("class", "present  col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour == 10){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
     else if (currentHour == 11){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour == 12){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour == 13){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "past col-10");
        $("#13").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour ==  14){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "past col-10");
        $("#13").attr("class", "past col-10");
        $("#14").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour == 15){
        $("#9").attr("class", "past col-10");
        $("#10").attr("class", "past col-10");
        $("#11").attr("class", "past col-10");
        $("#12").attr("class", "past col-10");
        $("#13").attr("class", "past col-10");
        $("#14").attr("class", "past col-10");
        $("#15").attr("class", "present col-10");
        $(".description").attr("class", "future description col-10");
    }
    else if (currentHour == 16){
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
    else if (currentHour == 17){
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
    }


    




function saveToStorage9(event){
   localStorage.setItem("9am", JSON.stringify($("#9").val()));
   console.log(space9.val())
}
function saveToStorage10(event){
    localStorage.setItem("10am", JSON.stringify($("#10").val()));
 }
 function saveToStorage11(event){
    localStorage.setItem("11am", JSON.stringify($("#11").val()));
 }
 function saveToStorage12(event){
    localStorage.setItem("12pm", JSON.stringify($("#12").val()));
 }
 function saveToStorage13(event){
    localStorage.setItem("1pm", JSON.stringify($("#13").val()));
 }
 function saveToStorage14(event){
    localStorage.setItem("2pm", JSON.stringify($("#14").val()));
 }
 function saveToStorage15(event){
    localStorage.setItem("3pm", JSON.stringify($("#15").val()));
 }
 function saveToStorage16(event){
    localStorage.setItem("4pm", JSON.stringify($("#16").val()));
 }
 function saveToStorage17(event){
    localStorage.setItem("5pm", JSON.stringify($("#17").val()));
 }

 save9.on("click", saveToStorage9);
 save10.on("click", saveToStorage10);
 save11.on("click", saveToStorage11);
 save12.on("click", saveToStorage12);
 save13.on("click", saveToStorage13);
 save14.on("click", saveToStorage14);
 save15.on("click", saveToStorage15);
 save16.on("click", saveToStorage16);
 save17.on("click", saveToStorage17);



///document.querySelector("#highScores").textContent = localStorage.getItem(initials.value, JSON.parse(localStorage.getItem(score)));


//run a function that changes the class from past present and future based on the time
//if 0000 to 9 all have class of future, 1700-2359 all have past 


//utilize bootstrap to form time blocks within .container 9-5(standard business)
//figure out how to integrate current time to show as colored blocks



//utilize a save block that will save information printed
//event listener on save button  
//save what information is printed aka item.val() within each time block so that is it always there unless deleted


