function evaluarDepresion() {
    let total = 0;
    for (let i = 1; i <= 20; i++) {
        const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
        if (respuesta) {
            total += parseInt(respuesta.value);
        }
    }

    let resultado = "";
    let recomendacion = "";

    if (total <= 10) {
        resultado = "Leve";
        recomendacion = "Tu nivel de depresión es bajo. Aunque no parece severo, es importante cuidar tu salud mental.";
    } else if (total <= 20) {
        resultado = "Moderada";
        recomendacion = "Tu nivel de depresión es moderado. Te recomendamos buscar ayuda profesional.";
    } else {
        resultado = "Severa";
        recomendacion = "Tu nivel de depresión es alto. Por favor, contacta a un profesional de inmediato.";
    }

    document.getElementById("texto-resultado").innerText = `Nivel de depresión: ${resultado}`;
    document.getElementById("recomendacion").innerText = recomendacion;
}

document.getElementById("form-contacto").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const celular = document.getElementById("celular").value;

    // Simulación de envío de correo
    const mensaje = `Nombre: ${nombre}\nCorreo: ${correo}\nCelular: ${celular}`;
    alert("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.\n\n" + mensaje);

    // Limpiar el formulario
    document.getElementById("form-contacto").reset();
});