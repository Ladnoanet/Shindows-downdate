const params = new URLSearchParams(window.location.search);
let OS = params.get("os") || "noneos";

if (OS == 'LL') {
    document.getElementById("oswhat").textContent = "Шиндовс LL";
    document.getElementById("whatitupdate").textContent = "все еще поддерживается";
    document.getElementById("whatitupdate").style.color = "#00C853";
} else {
    document.getElementById("oswhat").textContent = "неизвестна";
    document.getElementById("whatitupdate").textContent = "и не может поддерживаться";
    document.getElementById("whatitupdate").style.color = "#d8003a";
    document.getElementById("oswhat").style.color = "#d8003a";
};

function gotosite() {
    window.open('https://ladnoanet.github.io/Mocrosoft/', '_blank');
};
