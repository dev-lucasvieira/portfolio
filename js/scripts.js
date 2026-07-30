console.log("SCRIPT JS CARREGOU!");


// ==========================
// ANO FOOTER
// ==========================

const footer = document.querySelector("footer p");

if(footer){

    const ano = new Date().getFullYear();

    footer.innerHTML =
    `© ${ano} Lucas Vieira - Desenvolvedor Web`;

}



// ==========================
// EFEITO DIGITAÇÃO
// ==========================

const elementoTexto = document.querySelector(".texto h2");


if(elementoTexto){

    const texto = "Desenvolvedor Web em formação";

    let index = 0;

    elementoTexto.innerHTML = "";


    function escrever(){

        if(index < texto.length){

            elementoTexto.innerHTML += texto.charAt(index);

            index++;

            setTimeout(escrever,80);

        }

    }


    escrever();

}



// ==========================
// ANIMAÇÕES AO ROLAR
// ==========================

const elementos = document.querySelectorAll(
".hero, section, .card, .cards div"
);


if(elementos.length){

    const observer = new IntersectionObserver((entradas)=>{


        entradas.forEach((entrada)=>{


            if(entrada.isIntersecting){

                entrada.target.classList.add("mostrar");

            }


        });


    },{
        threshold:0.15
    });



    elementos.forEach((elemento)=>{

        elemento.classList.add("animar");

        observer.observe(elemento);

    });

}



// ==========================
// BOTÕES
// ==========================

const botoes = document.querySelectorAll("a");


botoes.forEach(botao=>{


    botao.addEventListener("mouseenter",()=>{

        botao.style.transform="scale(1.08)";

    });


    botao.addEventListener("mouseleave",()=>{

        botao.style.transform="scale(1)";

    });


});




// ==========================
// CURSOR PERSONALIZADO
// ==========================


const cursor = document.querySelector(".cursor");


console.log("Cursor:", cursor);



if(cursor){


    document.addEventListener("mousemove",(event)=>{


        cursor.style.left = event.clientX + "px";

        cursor.style.top = event.clientY + "px";


    });


}
const links = document.querySelectorAll("a, button");


links.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        cursor.style.width="21px";
        cursor.style.height="21px";
        cursor.style.background="#ffffff";

    });


    link.addEventListener("mouseleave",()=>{

        cursor.style.width="25px";
        cursor.style.height="25px";
        cursor.style.background="#10c973";

    });

});