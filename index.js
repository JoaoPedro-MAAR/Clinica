

let isLoggedIn = false;


const overlay = document.getElementById('lockOverlay');
const loginIcon = document.getElementById('loginIcon');


function toggleLogin() {
    isLoggedIn = !isLoggedIn;
    

    overlay.classList.toggle('lock-overlay-hidden', isLoggedIn);
    

    if(isLoggedIn) {
        loginIcon.innerHTML = `<img src="imagens/person-check.svg"> Logout`;
        showLoginAlert();
    } else {
        loginIcon.innerHTML = `<img src="imagens/person-circle.svg" alt="Perfil" width="30" height="24">
                                <span class="d-sm-none">Perfil</span>`;
    }
}
function showDangerAlert(texto) {
    const toastEl = document.getElementById('loginToast');
    const texto_toast = document.getElementById('texto-toast')
    texto_toast.textContent=texto
    console.log(toastEl.classList.toString())
    if (toastEl.classList.contains('bg-success')){
        toastEl.classList.replace('bg-success','bg-danger')
        console.log('I am the path , the leader and the father')
    }
    console.log("I'm in danger")
   
    toastEl.style.animation = 'none';
    void toastEl.offsetWidth;
    toastEl.style.animation = null;
    
   
    const toast = new bootstrap.Toast(toastEl, {
        animation: false,
        autohide: false
    });
    toast.show();
    

    setTimeout(() => {
        toast.hide();
    }, 3000);
}



function showSucessAlert(texto) {
    const toastEl = document.getElementById('loginToast');
    const texto_toast = document.getElementById('texto-toast')
    texto_toast.textContent=texto
    if (toastEl.classList.contains('bg-danger')){
        toastEl.classList.replace('bg-danger','bg-sucess')
        console.log('I am the path , the leader and the father')
    }
   
    toastEl.style.animation = 'none';
    void toastEl.offsetWidth;
    toastEl.style.animation = null;
    
   
    const toast = new bootstrap.Toast(toastEl, {
        animation: false,
        autohide: false
    });
    toast.show();
    

    setTimeout(() => {
        toast.hide();
    }, 3000);
}



function showLoginAlert() {
    const toastEl = document.getElementById('loginToast');
    
   
    toastEl.style.animation = 'none';
    void toastEl.offsetWidth;
    toastEl.style.animation = null;
    
   
    const toast = new bootstrap.Toast(toastEl, {
        animation: false,
        autohide: false
    });
    toast.show();
    

    setTimeout(() => {
        toast.hide();
    }, 3000);
}

const calenda = document.getElementById('calend');

function createCalendar() {

    
    
    let currentRow;
    
    for(let i = 1; i <= 35; i++) {
 
        let o = i
        if((o - 1) % 7 === 0) {
            currentRow = document.createElement('div');
            currentRow.className = 'row row-cols-7 g-2';
            calenda.appendChild(currentRow);
        }
        if (o>31){
            o = "-"
        }
        
        

        const day = document.createElement('button');
        day.className = 'col border p-2 botao';
        day.id = `diaSA${o}`;
        day.textContent = o;
        
        currentRow.appendChild(day);
    }
    

    //calenda.addEventListener('click', ())
}

createCalendar();

let primeiraVez = true
let botaoAtual = null; 
const desabilitador = document.getElementById('desabilitador')
let botoes = document.querySelectorAll('.botao')
function toggleDesabilitador(btn){
    if (btn.textContent == '-'){
            showDangerAlert('Por favor selecione uma data válida')
            return
    } 
    if (primeiraVez){
        primeiraVez = false
        botaoAtual = btn.textContent
      
        if (desabilitador.hasAttribute('disabled')){
            desabilitador.removeAttribute('disabled')
    
        }
    }
    if (botaoAtual != btn.textContent){
        botoes = document.querySelectorAll('.botao')
        for(let i=0;i<botoes.length;i++){
            if (botoes[i].classList.contains('selecionado')){
                botoes[i].classList.remove('selecionado')
            }
        if (btn.textContent == '-'){

        }    
        btn.classList.add('selecionado')
        botaoAtual = btn.textContent
        }
    }
    else {
        if (desabilitador.hasAttribute('disabled')){
            desabilitador.removeAttribute('disabled')
    
        }
        btn.classList.remove('selecionado')
        botaoAtual = null
    }

atualizarData()
}
// Adiciona um único listener no container pai
calenda.addEventListener('click', (event) => {
    const botaoClicado = event.target.closest('button');
    
    if (botaoClicado) {
        console.log('Botão pressionado:', {
            id: botaoClicado.id,
            texto: botaoClicado.textContent,
        
        
        });
        toggleDesabilitador(botaoClicado)
    }
});




function atualizarData(){
    const data = document.getElementById('dataText')
    data.innerText = `${botaoAtual}/01/2025`
}
let agendamentos = []



function agendarPoggers(){
        
}

let count = 1

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    if (count%3==0){
        appendAlert('Houve um erro ao agendar sua consulta', 'danger')
        SetNotifação('Houve um erro ao agendar sua consulta')
        console.log('AAA')
    }
    else{
        appendAlert('Sua consulta foi agendada com sucesso', 'success')
        SetNotifação('Sua consulta foi agendada com sucesso')
        console.log('AA')
}
count+=1

}



)
}
calenda.setAttribute
function SetNotifação(texto){
    coco = document.getElementById('cocoOver')
    coco.setAttribute('data-bs-content', texto)
    noti = document.getElementById('notificacao')
    noti.classList.remove('visually-hidden')
}


function removeNotifications(){
    noti = document.getElementById('notificacao')
    noti.classList.add('visually-hidden')
    SetNotifação('')
}


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))