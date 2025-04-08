// roleTextTranslations.js

// Objeto de traduções apenas para os papéis (roles) do role-text
const roleTranslations = {
    'pt': [
        "Programador",
        "Analista de Dados",
        "Assistente Administrativo",
        "Assistente Virtual",
        "Marketing Digital"
    ],
    'en': [
        "Programmer",
        "Data Analyst",
        "Administrative Assistant",
        "Virtual Assistant",
        "Digital Marketing"
    ],
    'es': [
        "Programador",
        "Analista de Datos",
        "Asistente Administrativo",
        "Asistente Virtual",
        "Marketing Digital"
    ],
    'fr': [
        "Programmeur",
        "Analyste de données",
        "Assistant administratif",
        "Assistant virtuel",
        "Marketing digital"
    ],
    'ru': [
        "Программист",
        "Аналитик данных",
        "Административный ассистент",
        "Виртуальный ассистент",
        "Цифровой маркетинг"
    ],
    'ja': [
        "プログラマー",
        "データアナリスト",
        "事務アシスタント",
        "バーチャルアシスタント",
        "デジタルマーケティング"
    ],
    'zh': [
        "程序员",
        "数据分析师",
        "行政助理",
        "虚拟助理",
        "数字营销"
    ]
};

// Variáveis para gerenciar os papéis e a animação
let currentRoles = roleTranslations['pt']; // Inicializa com o idioma padrão (português)
let currentRoleIndex = 0;
let roleTextElement = null;
let animationInterval = null; // Para controlar o setInterval da animação

// Função para alternar as palavras no role-text com animação
function changeRole() {
    if (!roleTextElement) {
        console.error('roleTextElement não encontrado durante changeRole! Aguardando elemento...');
        return; // Sai da função se roleTextElement não estiver definido
    }

    console.log('Mudando para o papel:', currentRoles[currentRoleIndex]);
    roleTextElement.textContent = currentRoles[currentRoleIndex];
    currentRoleIndex = (currentRoleIndex + 1) % currentRoles.length;

    // Aplica a animação de fade-in/fade-out
    roleTextElement.classList.remove('fade-in-out');
    void roleTextElement.offsetWidth; // Reinicia a animação
    roleTextElement.classList.add('fade-in-out');
}

// Função para atualizar os papéis com base no idioma
function updateRoleTranslations(lang) {
    if (roleTranslations[lang]) {
        currentRoles = roleTranslations[lang];
        console.log(`Papéis atualizados para o idioma ${lang}:`, currentRoles);
        currentRoleIndex = 0; // Reseta o índice para começar do início

        // Se o elemento já foi encontrado, atualiza imediatamente
        if (roleTextElement) {
            changeRole();
        } else {
            console.log('updateRoleTranslations chamado, mas roleTextElement ainda não foi encontrado. Aguardando...');
        }
    } else {
        console.error(`Traduções para o idioma ${lang} não encontradas. Usando idioma padrão (pt).`);
        currentRoles = roleTranslations['pt'];
        currentRoleIndex = 0;

        if (roleTextElement) {
            changeRole();
        }
    }
}

// Função para inicializar a animação usando MutationObserver
function initializeAnimation() {
    // Tenta encontrar o elemento imediatamente
    roleTextElement = document.querySelector('.role-text');
    if (roleTextElement) {
        console.log('Elemento .role-text encontrado imediatamente:', roleTextElement);
        changeRole();
        if (!animationInterval) {
            animationInterval = setInterval(changeRole, 2000);
        }
        return;
    }

    // Se não encontrar, usa MutationObserver para monitorar o DOM
    console.log('Elemento .role-text não encontrado. Iniciando MutationObserver...');
    const observer = new MutationObserver((mutations, obs) => {
        roleTextElement = document.querySelector('.role-text');
        if (roleTextElement) {
            console.log('Elemento .role-text encontrado via MutationObserver:', roleTextElement);
            obs.disconnect(); // Para o observador
            changeRole();
            if (!animationInterval) {
                animationInterval = setInterval(changeRole, 2000);
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Timeout para parar o observador após 10 segundos, se necessário
    setTimeout(() => {
        if (!roleTextElement) {
            observer.disconnect();
            console.error('Erro: Elemento .role-text não encontrado após 10 segundos. Verifique o HTML.');
        }
    }, 10000);
}

// Inicializa tudo ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente carregado - roleTextTranslations.js');
    
    // Inicializa as traduções com o idioma padrão (português)
    updateRoleTranslations('pt');
    
    // Inicia a busca pelo elemento e a animação
    initializeAnimation();
});

// Exporta a função para ser usada globalmente
window.updateRoleTranslations = updateRoleTranslations;