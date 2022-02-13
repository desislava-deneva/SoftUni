function attachEventsListeners() {
    let timeConvert = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convert(value, unit) {
        let inDays = value / timeConvert[unit];
        return {
            days: inDays,
            hours: inDays * timeConvert.hours,
            minutes: inDays * timeConvert.minutes,
            seconds: inDays * timeConvert.seconds,
        }
    }

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');


     document.getElementById('daysBtn').addEventListener('click', onCliced);
     document.getElementById('hoursBtn').addEventListener('click', onCliced);
     document.getElementById('minutesBtn').addEventListener('click', onCliced);
     document.getElementById('secondsBtn').addEventListener('click', onCliced);


    function onCliced(ev) {

        let parent = ev.target.parentElement;
        let inputValue = parent.querySelector('input[type="text"]');
        let ratios = inputValue.id;

        let obj = convert(Number(inputValue.value), ratios);

        days.value = obj.days;
        hours.value = obj.hours;
        minutes.value = obj.minutes;
        seconds.value = obj.seconds;

    }

}