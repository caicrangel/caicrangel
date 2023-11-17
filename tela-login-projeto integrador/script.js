let bdUser = [
	{user: 'caic',
	 pass: '1234',
	},
	{user: 'rangel',
	 pass: '654321',
	},
];

// bdUser.push({
// 	user: 'pedro',
// 	pass: '5858'
// })

// for (let i = 0; i < bdUser.length; i++) {
// 	console.log(bdUser[i].user)
// 	console.log(bdUser[i].pass)
//   }

// Validando os dados de login de acordo com a array
const btnFazerLogin = document.getElementById('bot1')

btnFazerLogin.addEventListener('click',()=>{

	let inputUser = document.getElementById('login-usuario').value;
	let inputPass = document.getElementById('login-senha').value;

	//validando usuario e senha do mesmo indice
	let credenciaisValidas = false;

	for (let i = 0; i < bdUser.length; i++) {
		if (bdUser[i].user === inputUser && bdUser[i].pass === inputPass) {
		credenciaisValidas = true;
		break; // Para a iteração assim que as credenciais válidas forem encontradas
			}
  	}

	if (inputUser === '' || inputPass === '') {
		alert('Usuário ou senha vazios!');
	}else if (credenciaisValidas) {
		window.location.href = 'login.html';
	}else{
		alert('Credenciais invalida!!!')
		let inputUser = document.getElementById('login-usuario')
		inputUser.value = ''
		let inputPass = document.getElementById('login-senha')
		inputPass.value = ''
	}
})

//Mostrando o formulário por cima da tela de login





function mostrarFormulario() {
	document.getElementById("overlay").style.display = "flex";
}

function fecharFormulario() {
	document.getElementById("overlay").style.display = "none";
}

function enviarFormulario() {
	// Lógica para processar o formulário aqui
	alert("Formulário enviado com sucesso!");
	fecharFormulario();
}

//Script da tela de cadastro

function bloqueiaEnter(input){
	input.addEventListener('keydown',(e) =>{
			if (e.key === "Enter") {
					e.preventDefault();
					return false;
			}
			})
	}
		
	// function mostrarBotEnviar(input){
	// 		input.addEventListener('blur',() =>{
	// 				 if (confirmSenhaInput.value !== '' ) {
	// 						 botEnviar.classList.add('visible')
	// 				 }else{
	// 						 botEnviar.classList.remove('visible')
	// 				 }
	// 		 })
			 
	//  }
	
	
	// ---------- VALIDAÇÃO USERNAME ---------- //
	let usernameLabel = document.querySelector('label[for="username"]');
	let usernameInput = document.getElementById("username");
	let usernameHelper = document.getElementById("username-helper");
	
	// Mostrar popup de campo obrigatório
	usernameInput.addEventListener('focus',()=>{
			usernameLabel.classList.add('required-popup')
	})
	
	// Ocultar popup de campo obrigatório
	usernameInput.addEventListener('blur',()=>{
			usernameLabel.classList.remove('required-popup')
	})
	
	// Validar valor do input
	usernameInput.addEventListener('change',(e)=>{
		 let valor = e.target.value
	
			if (valor.length < 5) {
					usernameHelper.classList.add('visible')
					usernameInput.classList.add('error')
					usernameInput.classList.remove('correct')
					usernameHelper.innerText = 'Seu username precisa de 5 caracteres ou mais'
			} else {
					usernameHelper.classList.remove('visible')
					usernameInput.classList.add('correct')
					usernameHelper.innerText = ''
			}
			if (valor === '') {
					usernameHelper.classList.remove('visible')
					usernameInput.classList.remove('error')
					usernameInput.classList.remove('correct')
					usernameInput.classList.remove('correct')
					usernameHelper.innerText = ''
			}
	})
	bloqueiaEnter(usernameInput)
	
	// ---------- VALIDAÇÃO EMAIL ---------- //
	let emailLabel = document.querySelector('label[for="email"]');
	let emailInput = document.getElementById("email");
	let emailHelper = document.getElementById("email-helper");
	
	// Mostrar popup de campo obrigatório
	emailInput.addEventListener('focus',()=>{
			emailLabel.classList.add('required-popup')
	})
	// Ocultar popup de campo obrigatório
	emailInput.addEventListener('blur',()=>{
			emailLabel.classList.remove('required-popup')
	})
	// Validar valor do input
	emailInput.addEventListener('change',(e)=>{
			let valor = e.target.value
			if (valor.includes('@') && valor.includes('.com')) {
					emailInput.classList.add('correct')
					emailHelper.classList.remove('visible')
	
			} else {
					emailInput.classList.remove('correct')
					emailInput.classList.add('error')
					emailHelper.innerText = 'Verifique seu e-mail!'
					emailHelper.classList.add('visible')
			}
			if (valor === '') {
					emailInput.classList.remove('error')
					emailHelper.classList.remove('visible')
	
			}
	})
	bloqueiaEnter(emailInput)
	
	// ---------- VALIDAÇÃO IDADE ---------- //
	let idadeLabel = document.querySelector('label[for="idade"]')
	let idadeInput = document.getElementById('idade')
	let idadeHelp = document.getElementById('idade-helper')
	
	// Validar valor do input
	idadeInput.addEventListener('change',(e)=>{
			let valor = e.target.value
			if (valor < 18) {
					idadeInput.classList.add('error')
					idadeHelp.classList.add('visible')
					idadeInput.classList.remove('correct')
					idadeHelp.innerText = 'Só aceitamos maiores de 18 anos'
			} else {
					idadeInput.classList.add('correct')
					idadeHelp.classList.remove('visible')
					idadeHelp.innerText = ''
			}
			if (valor === '') {
					idadeHelp.classList.remove('visible')
					idadeInput.classList.remove('correct')
					idadeInput.classList.remove('error')
			}
	})
	
	bloqueiaEnter(idadeInput)
	
	// ---------- VALIDAÇÃO SENHA ---------- //
	let senhaLabel = document.querySelector('label[for="senha"]')
	let senhaInput = document.getElementById('senha')
	let senhaHelp = document.getElementById('senha-helper')
	
	// Mostrar popup de campo obrigatório
	senhaInput.addEventListener('focus',()=>{
			senhaLabel.classList.add('required-popup')
	})
	
	// Ocultar popup de campo obrigatório
	senhaInput.addEventListener('blur',()=>{
			senhaLabel.classList.remove('required-popup')
	})
	
	
	function validarSenha(senha) {
			var regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
	
			if (regex.test(senha)) {
					return true;
			} else {
					return false;
			}
	}
	
	// Validar valor do input
	senhaInput.addEventListener('change',(e)=>{
			let senha = e.target.value
	
			if (validarSenha(senha) === true) {
					senhaInput.classList.add('correct')
					senhaInput.classList.remove('error')
					senhaHelp.classList.remove('visible')
					senhaHelp.innerText = ''
					confirmSenhaLabel.style.display = 'block'
					confirmSenhaInput.style.display = 'block'
			} else {
					senhaInput.classList.remove('correct')
					senhaInput.classList.add('error')
					senhaHelp.classList.add('visible')
					senhaHelp.innerText = `Requisitos de senha:
	
					8 Caracter ou mais
					1 Letra maiúscula
					1 Caracter especial
					`
					confirmSenhaLabel.style.display = 'none'
					confirmSenhaInput.style.display = 'none'
			}
			if (senha === '') {
					confirmSenhaInput.value = ''
					confirmSenhaInput.classList.remove('error')
					senhaInput.classList.remove('correct')
					senhaInput.classList.remove('error')
					senhaHelp.classList.remove('visible')        
			}
			
	})
	bloqueiaEnter(senhaInput)
	
	
	let confirmSenhaLabel = document.querySelector('label[for="confirma-senha"]')
	let confirmSenhaInput = document.getElementById('confirma-senha')
	let confirmSenhaHelp = document.getElementById('senha-helper2')
	let botaoEnviar = document.getElementById('enviar');
	
	confirmSenhaInput.addEventListener('focus',()=> {
			confirmSenhaLabel.classList.add('required-popup')
	})
	
	confirmSenhaInput.addEventListener('blur',()=> {
			confirmSenhaLabel.classList.remove('required-popup')
	})
	
	confirmSenhaInput.addEventListener('change',(e) => {
	
			let senhaPrimeiroCampo = senhaInput.value
	
			let senhaConfirmacao = e.target.value
	
			if (senhaConfirmacao === senhaPrimeiroCampo) {
					confirmSenhaInput.classList.add('correct')
					confirmSenhaInput.classList.remove('error')
	
			} else {
					confirmSenhaInput.classList.remove('correct')
					confirmSenhaInput.classList.add('error')
	
			}
			
			if (senhaConfirmacao === '') {
					confirmSenhaInput.classList.remove('correct')
					confirmSenhaInput.classList.remove('error')
			}  
	
			if (senhaConfirmacao === senhaPrimeiroCampo) {
					botaoEnviar.removeAttribute('disabled');
			}
	})
	bloqueiaEnter(confirmSenhaInput)


botaoEnviar.addEventListener('click',()=>{
	enviarFormulario()
})