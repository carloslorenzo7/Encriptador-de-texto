// script.js

document.getElementById("encrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let lowercaseOnly = document.getElementById("lowercase-only").checked;

    if (lowercaseOnly) {
        inputText = inputText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    let encryptedText = btoa(inputText); // Encriptar utilizando base64
    document.getElementById("output-text").value = encryptedText;
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let decryptedText = atob(inputText); // Desencriptar utilizando base64
    document.getElementById("output-text").value = decryptedText;
});

document.getElementById("copy-btn").addEventListener("click", function() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
});
