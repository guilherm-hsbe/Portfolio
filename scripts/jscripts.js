function copyText() {
    var textoCopiado = document.getElementById("texto");
    var areaDeTransferencia = document.createElement("textarea");
    areaDeTransferencia.value = textoCopiado.textContent;
    document.body.appendChild(areaDeTransferencia);
    areaDeTransferencia.select();

    navigator.clipboard.writeText(textoCopiado.textContent)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch((err) => {
            console.error('Não foi possível copiar o texto: ', err);
        });

    document.body.removeChild(areaDeTransferencia);
    alert("Texto copiado para a área de transferência!");
}