// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentTime = moment();
$("#currentDay").text(currentTime.format("MM/DD/YY"));
var currentHour = moment().hours()
console.log(currentHour)
var saved = document.getElementById("fas fa-save");
var textarea = document.getElementById("textarea");
var button = document.querySelector(".saveBtn")

// var hour9 = 9;
// var hour10 = 10;
// var hour11 = 11;
// var hour12 = 12;
// var hour1 = 13;
// var hour2 = 14;
// var hour3 = 15;
// var hour4 = 16;
// var hour5 = 17;
$(".time-block").each(function(hour) {
  var hourKey = parseInt($(this).attr("id").split("-")[1])
  if(hourKey < currentHour) {
    $(this).children(".description").addClass("past")
  } else if (hourKey === currentHour) {
    $(this).children(".description").addClass("present")
  } else {
    $(this).children(".description").addClass("future")
  }
})

var displayTime = document.querySelector("#currentDay");

$(".saveBtn").on("click", function() {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  console.log(value, time)
  localStorage.setItem(time, value);
})
  
for (var i = 9; i < 18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`)) 
}
// let scheduleStorage = localStorage.getItem("saved")
//   ? JSON.parse(localStorage.getItem("saved"))
//   : [];


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

