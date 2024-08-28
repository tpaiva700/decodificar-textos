const substituicoes = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
};

const inversoes = Object.fromEntries(
  Object.entries(substituicoes).map(([k, v]) => [v, k])
);

function criptografar() {
  let texto = document.getElementById('textoEntrada').value;
  let textoCriptografado = texto.split('').map(c => substituicoes[c] || c).join('');
  document.getElementById('textoSaida').value = textoCriptografado;
}

function descriptografar() {
  let texto = document.getElementById('textoEntrada').value;
  let textoDescriptografado = texto;
  for (let [chave, valor] of Object.entries(inversoes)) {
      textoDescriptografado = textoDescriptografado.replaceAll(chave, valor);
  }
  document.getElementById('textoSaida').value = textoDescriptografado;
}

function copiarTexto() {
  let texto = document.getElementById('textoSaida').value;
  navigator.clipboard.writeText(texto).then(() => {
      alert('Texto copiado para a área de transferência!');
  });
}

function copiarTextoSaida() {
  let texto = document.getElementById('textoSaida').value;
  navigator.clipboard.writeText(texto).then(() => {
      alert('Texto copiado para a área de transferência!');
  });
}