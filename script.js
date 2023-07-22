window.onload = function() {
    // Função para verificar se o número está perto de 7
    function isNearSeven(numero) {
        return numero < 7;
    }

    // Obtém as referências para os elementos que contêm os números
    var numeroElement1 = document.getElementById('numero1');
    var numeroElement2 = document.getElementById('numero2');
    var numeroElement3 = document.getElementById('numero3');
    var numeroElement4 = document.getElementById('numero4');
    var numeroElement5 = document.getElementById('numero5');
    var numeroElement6 = document.getElementById('numero6');
    var numeroElement7 = document.getElementById('numero7');
    var dataAcessoElement = document.getElementById('current_date');

    function exibirDataAcesso() {
        var dataAcesso = new Date();
        dataAcessoElement.innerHTML = 'Data de acesso: ' + dataAcesso;
      }
      
    exibirDataAcesso();
  
    // Obtém os valores iniciais dos números
    var numeroAtual1 = parseInt(numeroElement1.innerHTML);
    var numeroAtual2 = parseInt(numeroElement2.innerHTML);
    var numeroAtual3 = parseInt(numeroElement3.innerHTML);
    var numeroAtual4 = parseInt(numeroElement4.innerHTML);
    var numeroAtual5 = parseInt(numeroElement5.innerHTML);
    var numeroAtual6 = parseInt(numeroElement6.innerHTML);
    var numeroAtual7 = parseInt(numeroElement7.innerHTML);
  
    // Define a função para diminuir os números
    function diminuirNumeros() {
      // Números que diminuem 1 unidades a cada 10 segundos
      if (numeroAtual1 > 0) {
        numeroAtual1 --;
        numeroElement1.innerHTML = numeroAtual1;
        if (isNearSeven(numeroAtual1)) {
            numeroElement1.style.color = 'red';
          }
      }
      
      // Números que diminuem 2 unidades a cada 10 segundos
      if (numeroAtual2 > 0) {
        numeroAtual2 -= 2;
        numeroElement2.innerHTML = numeroAtual2;
        if (isNearSeven(numeroAtual2)) {
            numeroElement2.style.color = 'red';
          }
      }
  
      if (numeroAtual3 > 0) {
        numeroAtual3--;
        numeroElement3.innerHTML = numeroAtual3;
        if (isNearSeven(numeroAtual3)) {
            numeroElement3.style.color = 'red';
          }
      }
  
      if (numeroAtual4 > 0) {
        numeroAtual4--;
        numeroElement4.innerHTML = numeroAtual4;
        if (isNearSeven(numeroAtual4)) {
            numeroElement4.style.color = 'red';
          }
      }
  
      if (numeroAtual5 > 0) {
        numeroAtual5--;
        numeroElement5.innerHTML = numeroAtual5;
        if (isNearSeven(numeroAtual5)) {
            numeroElement5.style.color = 'red';
          }
      }
  
      // Números que diminuem 2 unidades a cada 10 segundos
      if (numeroAtual6 > 0) {
        numeroAtual6 -= 2;
        numeroElement6.innerHTML = numeroAtual6;
        if (isNearSeven(numeroAtual6)) {
            numeroElement6.style.color = 'red';
          }
      }
  
      if (numeroAtual7 > 0) {
        numeroAtual7--;
        numeroElement7.innerHTML = numeroAtual7;
        if (isNearSeven(numeroAtual7)) {
            numeroElement7.style.color = 'red';
          }
      }
  
      var dataAtual = new Date();
      var dia = dataAtual.getDate();
      var mes = dataAtual.getMonth() + 1; // Janeiro é 0, Fevereiro é 1, etc.
      var ano = dataAtual.getFullYear();
      var dataFormatada = dia + '/' + mes + '/' + ano;
      dataAtualizacaoElement.innerHTML = 'Data da última atualização: ' + dataFormatada;

    // Chama a função novamente após 24 horas (86400000 milissegundos = 24 horas)
    setTimeout(atualizarNumeros, 86400000);
  }

  // Inicializa a chamada da função pela primeira vez
  atualizarNumeros();
};
  