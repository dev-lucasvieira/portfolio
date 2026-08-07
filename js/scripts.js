console.log("SYSTEM.JS carregado!");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ==========================
// BOOT SEQUENCE
// ==========================

const bootScreen = document.getElementById("bootScreen");
const bootLog = document.getElementById("bootLog");
const bootBarFill = document.getElementById("bootBarFill");

const linhasBoot = [
    "> INICIANDO PERFIL_LUCAS.SYS",
    "> CARREGANDO MÓDULOS: HTML / CSS / JS / REACT / NODE",
    "> VERIFICANDO CONEXÃO... OK",
    "> ACESSO CONCEDIDO"
];

function rodarBoot() {
    if (!bootScreen || !bootLog) return;

    if (reducedMotion) {
        bootScreen.classList.add("hide");
        return;
    }

    let i = 0;

    function proximaLinha() {
        if (i < linhasBoot.length) {
            bootLog.innerHTML += (i > 0 ? "\n" : "") + linhasBoot[i];
            i++;
            setTimeout(proximaLinha, 380);
        } else {
            if (bootBarFill) bootBarFill.style.width = "100%";
            setTimeout(() => bootScreen.classList.add("hide"), 700);
        }
    }

    if (bootBarFill) bootBarFill.style.width = "35%";
    proximaLinha();
}

rodarBoot();

// ==========================
// RELÓGIO DO SISTEMA
// ==========================

const clock = document.getElementById("clock");

function atualizarRelogio() {
    if (!clock) return;
    const agora = new Date();
    const hh = String(agora.getHours()).padStart(2, "0");
    const mm = String(agora.getMinutes()).padStart(2, "0");
    const ss = String(agora.getSeconds()).padStart(2, "0");
    clock.textContent = `${hh}:${mm}:${ss}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

// ==========================
// ANO NO FOOTER
// ==========================

const footer = document.querySelector("footer p");

if (footer) {
    const ano = new Date().getFullYear();
    footer.innerHTML = `© ${ano} Lucas Vieira — Desenvolvedor Web`;
}

// ==========================
// EFEITO DE DIGITAÇÃO (cargo)
// ==========================

const elementoTexto = document.getElementById("typedRole");

if (elementoTexto) {
    const texto = "Desenvolvedor Web em formação";
    let index = 0;

    function escrever() {
        if (index < texto.length) {
            elementoTexto.textContent += texto.charAt(index);
            index++;
            setTimeout(escrever, 70);
        }
    }

    setTimeout(escrever, reducedMotion ? 0 : 1900);
}

// ==========================
// ANIMAÇÕES AO ROLAR
// ==========================

const elementos = document.querySelectorAll(".hud-panel, .card, .cards div");

if (elementos.length) {
    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("mostrar");
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach((elemento) => {
        elemento.classList.add("animar");
        observer.observe(elemento);
    });
}

// ==========================
// RETÍCULA (CURSOR HUD)
// ==========================

const reticle = document.getElementById("reticle");

if (reticle && window.matchMedia("(hover: hover)").matches) {

    document.addEventListener("mousemove", (event) => {
        reticle.style.left = event.clientX + "px";
        reticle.style.top = event.clientY + "px";
        reticle.classList.add("show");
    });

    const alvos = document.querySelectorAll("a, button, .card, .cards div");

    alvos.forEach((alvo) => {
        alvo.addEventListener("mouseenter", () => reticle.classList.add("lock"));
        alvo.addEventListener("mouseleave", () => reticle.classList.remove("lock"));
    });
}
