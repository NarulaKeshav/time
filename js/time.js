$(document).ready(function() {

    var quoteArr = [
        "If you spend too much time thinking about a thing, you'll never get it done.",
        "Don't wait, time will never be just right.",
        "Patience and time do more than strength or passion.",
        "Time you enjoy wasting, was not wasted.",
        "You may delay, but time will not.",
        "We must use time as a tool, not as a couch.",
        "Time moves in one direction, memory in another.",
        "There are no secrets that time does not reveal.",
        "Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present.",
        "Better three hours too soon than a minute too late.",
        "Time flies over us, but leaves its shadow behind.",
        "Lost time is never found again.",
        "Tough times never last, but tough people do.",
        "If you don't have time to do it right, when will you have time to do it over?",
        "Time is what we want most, but what we use worst.",
        "Time is flying never to return.",
        "Waste your money and you're only out of money, but waste your time and you've lost a part of your life.",
        "Time = Life, Therefore, waste your time and waste of your life, or master your time and master your life.",
        "Time is the most valuable thing a man can spend.",
        "It is strange that the years teach us patience; that the shorter our time, the greater our capacity for waiting.",
        "I must govern the clock, not be governed by it.",
        "Time goes, you say? Ah, no! alas, time stays, we go.",
        "There's time enough, but none to spare.",
        "The present time has one advantage over every other - it is our own.",
        "Time stays long enough for anyone who will use it.",
        "Work is hard. Distractions are plentiful. And time is short.",
        "Time and memory are true artists; they remould reality nearer to the heart's desire.",
        "Men talk of killing time, while time quietly kills them.",
        "Time is not measured by clocks but by moments.",
        "The trouble is, you think you have time.",
        "The only real luxury is time. You can't get time back.",
        "It's not about 'having' time, it's about making time.",
        "Sometimes you will never know the value of a moment until it becomes a memory.",
        "Time is more valuable than money. You can get more money, but you cannot get more time.",
        "When was the last time you did something for the first time?",
        "Time is precious, waste it wisely.",
        "Time won't make you forget, it'll make you grow and understand things.",
        "All we have to decide is what to do with the time that is given to us.",
        "How long is forever? Sometimes, just one second.",
        "Don't give up! Great things take time.",
        "Don't wait! Life goes faster than you think."
        ]

    // Being everything
    init();

    // Updates the time every 100 milliseconds
    setInterval(showCurrentTime, 100);

    /**
     * Intializes everything
     * Shows current time
     * Shows today's date
     * Shows randomized quote
     */
    function init() {
        showCurrentTime();
        showTodayDate();
        randomizeQuote(quoteArr);
    }

    /**
     * Changes the quote on screen on button click
     */
    $('.change').click(function() {
        randomizeQuote(quoteArr);
    });

    /**
     * Gets today's date in MON 00, 0000 format
     * Displays the date on the HTML page
     */
    function showTodayDate() {
        var arr = [
            'JAN', 'FEB', 'MAR', 'APR',
            'MAY', 'JUN', 'JUL', 'AUG',
            'SEP', 'OCT', 'NOV', 'DEC'
        ];
        var month = arr[new Date().getMonth()];
        var date = new Date().getDate().toString();
        var year = new Date().getFullYear();
        $('#date').text(month + " " + date + ", " + year);
    }

    /**
     * Gets the current hour
     * @return hour current hour in 12 hour format
     */
    function getCurrentHour() {
        var hour = new Date().getHours() % 12;
        if (hour == 0) return '12';
        else if (hour < 10) return '0' + hour;
        else return hour;
    }

    /**
     * Gets the current minute
     * @return min current time in minutes
     */
    function getCurrentMinutes() {
        var min = new Date().getMinutes();
        if (min < 10) return '0' + min;
        else return min;
    }

    /**
     * Gets current time in seconds
     * @return sec current seconds
     */
    function getCurrentSeconds() {
        var sec = new Date().getSeconds();
        if (sec < 10) return '0' + sec;
        else return sec;
    }

    /**
     * Determines whether it's AM or PM
     * @return am or pm string
     */
    function amOrPm() {
        var hourIn24 = new Date().getHours();
        if (hourIn24 > 12) return 'pm';
        else return 'am';
    }

    /**
     * Gets the hour, minute, and time
     * Calls display time to display time
     */
    function showCurrentTime() {
        var hour = getCurrentHour();
        var minute = getCurrentMinutes();
        var seconds = getCurrentSeconds();
        var pmOrAm = amOrPm();
        displayTime(hour, minute, seconds, pmOrAm);
    }

    /**
     * Displays time in HTML by changing DOM
     * @param  hr current hour
     * @param  min current minutes
     * @param  sec current second
     * @param  pm am or pm
     */
    function displayTime(hr, min, sec, pm) {
        $('#hour').text(hr);
        $('#min').text(min);
        $('#sec').text(sec);
        $('#ampm').text(pm);
    }

    /**
     * Shows the quote at the random index
     * @param  arr to look in
     */
    function randomizeQuote(arr) {
        var random = Math.floor(Math.random() * (Math.random() * arr.length));
        $('#time-quote').text(arr[random]);
    }
});
