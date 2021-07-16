const Clock = {
    totalSeconds: 0,

    start() {
        Clock.active('start');
        if (!this.interval) {
            const self = this;

            function pad(val) { return val > 9 ? val : `0${val}`; }
            this.interval = setInterval(() => {
                self.totalSeconds += 1;

                document.getElementById('hour').innerHTML = pad(Math.floor(self.totalSeconds / 60 / 60));
                document.getElementById('min').innerHTML = pad(Math.floor(self.totalSeconds / 60 % 60));
                document.getElementById('sec').innerHTML = pad(parseInt(self.totalSeconds % 60));
            }, 1000);
        }
    },

    stop() {
        Clock.active('stop');

        Clock.totalSeconds = null;
        clearInterval(this.interval);
        document.getElementById('hour').innerHTML = '00';
        document.getElementById('min').innerHTML = '00';
        document.getElementById('sec').innerHTML = '00';
        delete this.interval;
    },

    pause() {
        Clock.active('pause');

        clearInterval(this.interval);
        delete this.interval;
    },
    active(type) {
        if (type === 'start') {
            startButton.classList.add('active-start');
            pauseButton.classList.remove('active-pause');
            stopButton.classList.remove('active-stop');
        } else if (type === 'pause') {
            startButton.classList.remove('active-start');
            pauseButton.classList.add('active-pause');
            stopButton.classList.remove('active-stop');
        } else if (type === 'stop') {
            startButton.classList.remove('active-start');
            pauseButton.classList.remove('active-pause');
        }
    },
};

const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

startButton.addEventListener('click', () => { Clock.start(); });
pauseButton.addEventListener('click', () => { Clock.pause(); });
stopButton.addEventListener('click', () => { Clock.stop(); });