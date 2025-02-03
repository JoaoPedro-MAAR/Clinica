
// Estado global
let isLoggedIn = false;

// Elementos
const overlay = document.getElementById('lockOverlay');
const loginIcon = document.getElementById('loginIcon');

// Função principal
function toggleLogin() {
    isLoggedIn = !isLoggedIn;
    
    // Método confiável para alternar classes
    overlay.classList.toggle('lock-overlay-hidden', isLoggedIn);
    
    // Atualização visual do ícone
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
    
    // Reset animation
    toastEl.style.animation = 'none';
    void toastEl.offsetWidth; // Trigger reflow
    toastEl.style.animation = null;
    
    // Mostrar toast
    const toast = new bootstrap.Toast(toastEl, {
        animation: false,
        autohide: false
    });
    toast.show();
    
    // Esconder automaticamente após 3s
    setTimeout(() => {
        toast.hide();
    }, 3000);
}

const calenda = document.getElementById('calend');

function createCalendar() {
    // Cria container principal
    const container = document.createElement('div');
    container.className = 'container text-center';
    
    let currentRow;
    
    for(let i = 1; i <= 35; i++) {
        // Cria nova linha a cada 7 dias
        let o = i
        if((o - 1) % 7 === 0) {
            currentRow = document.createElement('div');
            currentRow.className = 'row row-cols-7 g-2';
            calenda.appendChild(currentRow);
        }
        if (o>31){
            o = o-31
        }
        
        
        // Cria elemento do dia
        const day = document.createElement('button');
        day.className = 'col border p-2';
        day.id = `diaSA${o}`;
        day.textContent = o;
        
        currentRow.appendChild(day);
    }
    
    // Adiciona ao DOM preservando conteúdo existente
    calenda.appendChild(container);
}

createCalendar();