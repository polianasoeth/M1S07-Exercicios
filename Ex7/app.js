import Usuario from "./Usuario.js"

const usuarios = [
    new Usuario('Poliana', 'poliana@gmail.com', 'ferias123')
]

document.getElementById("login-button").addEventListener("click", fazerLogin)

// Função para fazer login
function fazerLogin() {
    document.getElementById('autenticacao-sucess').hidden = true
    document.getElementById('error-autenticacao').hidden = true

    const email = document.getElementById('campo-email').value
    const senha = document.getElementById('campo-senha').value

    document.getElementById('campo-email').classList.remove("input-error")
    document.getElementById('error-email').hidden = true

    document.getElementById('campo-senha').classList.remove("input-error")
    document.getElementById('error-senha').hidden = true

    // Verificando se os dados são válidos
    if (email === "") {
        document.getElementById('campo-email').classList.add('input-error')
        document.getElementById('error-email').hidden = false
        document.getElementById('error-email').innerText = "Digite um email válido"


    } else if (senha.length < 5) {
        document.getElementById('campo-senha').classList.add('input-error')
        document.getElementById('error-senha').hidden = false
        document.getElementById('error-senha').innerText = "A senha deve ter no minimo 5 caracteres"
    }

    const usuarioEncontrado = usuarios.some(usuario => usuario.autenticar(email, senha))
    if (usuarioEncontrado) {
        document.getElementById('autenticacao-sucess').hidden = false
        document.getElementById('autenticacao-sucess').innerText = "Usuário autenticado com sucesso 😁"
        
    } else {
        document.getElementById('error-autenticacao').hidden = false
        document.getElementById('error-autenticacao').innerText = "Usuário não encontrado 😞"
        // usuário não foi encontrado
    }
}


