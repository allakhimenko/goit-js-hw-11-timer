const refs = {
    timerIndicator: document.querySelector('#timer-1'),
    dataValue: document.querySelector('span[data-value="days"]'),
    hourValue: document.querySelector('span[data-value="hours"]'),
    minValue: document.querySelector('span[data-value="mins"]'),
    secValue: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    };

    start() {
        setInterval(() => {            
            const currentDate = Date.now();
            const timeLeft = this.targetDate - currentDate;
            const time = this.getTimeComponents(timeLeft);
            this.updateTimer(time);
        }, 1000)
    };    

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));          
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    };

    pad(value) {
        return String(value).padStart(2, '0');
    };

    updateTimer({ days, hours, mins, secs }) {
        refs.dataValue.textContent = `${days}`;
        refs.hourValue.textContent = `${hours}`;
        refs.minValue.textContent = `${mins}`;
        refs.secValue.textContent = `${secs}`;
    };
};  

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Feb 5, 2022'),
  });

  timer.start();