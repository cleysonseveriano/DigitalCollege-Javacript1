nome = document.getElementById('nome')
sobrenome = document.getElementById('sobrenome')
idade = document.getElementById('idade')

function alertar(){
    alert(`Seu nome é: ${nome.value} ${sobrenome.value}. E tenho ${idade.value} anos.`)
}