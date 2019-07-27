let comecar_parar = document.querySelector("#comecar_parar");
let zerar = document.querySelector("#zerar");
let cronometro = document.querySelector("#cronometro");
let iniciado = false, hora_inicio, hora_atual, init_cronometro, tempo_passado, horas, minutos, segundos, milisegundos;


function adicionar_zero(number){
    if(number>=0 && number<=9){
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

function controlar(){
    if(!iniciado){
        iniciado = true;
        comecar_parar.innerHTML = "Parar";

        //Começar o cronômetro
        if(!hora_inicio){
            hora_inicio = new Date().getTime();
        } else{
            hora_inicio = new Date().getTime() - tempo_passado;
        }

        init_cronometro = setInterval(() => {

            hora_atual = new Date().getTime();
            tempo_passado = hora_atual - hora_inicio;

            horas = adicionar_zero(Math.floor(tempo_passado / 3600000));
            resto = tempo_passado - (horas * 3600000);

            minutos = adicionar_zero(Math.floor(resto / 60000));
            resto -= (minutos*60000);

            segundos = adicionar_zero(Math.floor(resto / 1000));
            resto -= (segundos*1000);

            milisegundos = adicionar_zero(resto);


            cronometro.innerHTML= `${horas}:${minutos}:${segundos} ${milisegundos}` ;
        }, 10);

    } else {
        clearInterval(init_cronometro);
        iniciado = false;
        comecar_parar.innerHTML = "Começar"
    }
}

comecar_parar.onclick = controlar;

function zerar_cronometro(){
    tempo_passado = 0;
    hora_inicio = new Date().getTime();
    cronometro.innerHTML =  "00:00:00 00";
}

zerar.onclick = zerar_cronometro;