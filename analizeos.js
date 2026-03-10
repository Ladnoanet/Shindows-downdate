
const pageParams = new URLSearchParams(window.location.search);
let OS = pageParams.get("os");

if (!OS) {
    const script = document.currentScript;
    
    if (script) {
        const scriptURL = new URL(script.src);
        OS = scriptURL.searchParams.get("os");
    }
}

OS = OS || "noneos";

if (OS === 'LL') {
    document.getElementById("oswhat").textContent = "Шиндовс LL";
    document.getElementById("whatitupdate").textContent = "уже неактуальна";
    document.getElementById("whatitupdate").style.color = "#d8003a";
} else if (OS === 'HZ') {
    document.getElementById("oswhat").textContent = "Шиндовс хз";
    document.getElementById("whatitupdate").textContent = "все еще поддерживается";
    document.getElementById("whatitupdate").style.color = "#00C853";
} else if (OS === 'ZV') {
    document.getElementById("oswhat").textContent = "Шиндовс ЗаВисла";
    document.getElementById("whatitupdate").textContent = "является пока демкой. соси.";
    document.getElementById("whatitupdate").style.color = "#00C853";
} else {
    document.getElementById("oswhat").textContent = "неизвестна";
    document.getElementById("whatitupdate").textContent = "и не может поддерживаться";
    document.getElementById("whatitupdate").style.color = "#d8003a";
    document.getElementById("oswhat").style.color = "#d8003a";
}

function gotosite() {
    window.open('https://ladnoanet.github.io/Mocrosoft/', '_blank');
};
