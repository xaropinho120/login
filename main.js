const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split('');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
 let formEvalido = false;
 e.preventDefault();

 const nomeBeneficiario = document.getElementById('nome-beneficiario');
 const numeroContaBeneficiario = document.getElementById('numero-conta');
 const valorDeposito = document.getElementById('valor-deposito');
 const mensagemSucesso = `montante de: <b>${valorDeposito.value}</b> deposito para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;



 formEvalido = validaNome(nomeBeneficiario.value)
 if (formEvalido) {
    document = this.querySelector('.success-menssage').innerHTML = mensagemSucesso;

    nomeBeneficiario.value = '';
    numeroContaBeneficiario.value = '';
    valorDeposito.value = '';
 } else {
    alert('O nome não está completo')
 }


});
console.log(form);