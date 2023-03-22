var estadoLicuadora = "apagada"
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerSonido();
        licuadora.classList.add("active");
        console.log("me has encendido");
    } else {
        estadoLicuadora = "apagada"
        hacerSonido();
        licuadora.classList.remove("active");
        console.log("me has apagado");
    }

    function hacerSonido() {
        if (sonidoLicuadora.paused) {
            botonLicuadora.play();
            sonidoLicuadora.play();
        } else {
            botonLicuadora.play();
            sonidoLicuadora.pause();
            sonidoLicuadora.currentTime = 0;
        }
    }
}