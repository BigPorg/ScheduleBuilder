$(document).ready(function (event) {
    // gives date and time
    // event.preventDefault();
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        console.log(this);
        // save input with button
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // set the text and time into local storage
        localStorage.setItem(time, text);
    })
    
    function timeTracker() {
        var currentHour = moment().hour();
        // check to see if timeTracker loads
        console.log("function timeTracker loaded");
        document.getElementsByClassName("row time-block");

        // loop thru time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour);

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })    
        
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));
    $("#hour21 .description").val(localStorage.getItem("hour21"));
    $("#hour22 .description").val(localStorage.getItem("hour22"));
    $("#hour23 .description").val(localStorage.getItem("hour23"));
    $("#hour24 .description").val(localStorage.getItem("hour24"));

    console.log("hours loaded");
    }
    timeTracker();
})

//having trouble saving on local storage
// why does having .description make it work??