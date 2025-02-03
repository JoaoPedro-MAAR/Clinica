

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
        day.className = 'col border p-2';
        day.id = `diaSA${o}`;
        day.textContent = o;
        
        currentRow.appendChild(day);
    }
    

    //calenda.addEventListener('click', ())
}

createCalendar();

let primeiraVez = true
let botaoAtual; 
const desabilitador = document.getElementById('desabilitador')
function toggleDesabilitador(btn){
    if (primeiraVez){
        primeiraVez = false
        botaoAtual = btn.texto
        if (desabilitador.hasAttribute('disabled')){
            desabilitador.removeAttribute('disabled')
    
        }
    }
    if (botaoAtual != btn.id){
        botaoAtual.
        botaoAtual = btn
        btn.setAttribute('selected','true')
    }
    else {
        desabilitador.removeAttribute('disabled')
    }


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
