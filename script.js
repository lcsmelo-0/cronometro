let comecar_parar = document.querySelector("#comecar_parar");
let cronometro = document.querySelector("#cronometro");
let iniciado = false, hora_inicio, hora_atual, init_cronometro, tempo_passado;


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

            cronometro.innerHTML= tempo_passado;
        }, 10);

    } else{
        clearInterval(init_cronometro);
        iniciado = false;
        comecar_parar.innerHTML = "Começar"
    }
}

comecar_parar.onclick = controlar;