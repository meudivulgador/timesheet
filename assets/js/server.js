let startTimer = document.getElementById('start');
startTimer.addEventListener('click', start);

let pauseTimer = document.getElementById('pause');
pauseTimer.addEventListener('click', pause);

let stopTimer = document.getElementById('stop');
stopTimer.addEventListener('click', stop);


var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos milésimos valem 1 segundo?
var cron;

//Inicia o temporizador
function start() {
    startTimer.classList.add('active-start');
    pauseTimer.classList.remove('active-pause');
    stopTimer.classList.remove('active-stop');
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    startTimer.classList.remove('active-start');
    pauseTimer.classList.add('active-pause');
    stopTimer.classList.remove('active-stop');
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    startTimer.classList.remove('active-start');
    pauseTimer.classList.remove('active-pause');
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('timer').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0; //Volta os minutos para 0
            hh++; //Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById('timer').innerText = format;

    //Retorna o valor tratado
    return format;
}