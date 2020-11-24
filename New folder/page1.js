function current_date() {
    var day2;
    var date1 = new Date();
    var day1 = date1.getDay();
    var month = date1.getMonth() + 1;
    var date2 = date1.getDate();
    var year = date1.getFullYear();
    var time1 = date1.getHours();
    var mins = date1.getMinutes();
    var seconds1 = date1.getSeconds();
    var fulldate;
    var time2 = time1 % 12;

    if (mins < 10) {
        mins = "0" + mins;
    }
    if (seconds1 < 10) {
        seconds1 = "0" + seconds1;
    }
    if (time2 < 10) {
        time2 = "0" + time2;
    }
    if (time1 >= 12) {
        time2 = time2 + ":" + mins + ":" + seconds1 + " PM";
    } else {
        time2 = time2 + ":" + mins + ":" + seconds1 + " AM";
    }

    if (day1 == 0) {
        day2 = "Sunday";
    } else if (day1 == 1) {
        day2 = "Monday";
    } else if (day1 == 2) {
        day2 = "Tuesday";
    } else if (day1 == 3) {
        day2 = "Wednesday";
    } else if (day1 == 4) {
        day2 = "Thursday";
    } else if (day1 == 5) {
        day2 = "Friday";
    } else {
        day2 = "Saturday";
    }
    fulldate = "Time: " + time2 + "         Date: " + "    " + month + "/" + date2 + "/" + year + "         Day:" + "  " + day2;
    document.getElementById("time1").innerHTML = fulldate;
}

function linkdisplay() {
    $(".airline-link").toggle("slow");

    $('.linkbutton').css({ 'border-color': 'transparent', 'border-style': 'none' });
}