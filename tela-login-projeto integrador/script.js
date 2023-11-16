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


function pegarUserPass(){

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
}

