document.addEventListener('DOMContentLoaded', function () {
  const restaurantForm = document.getElementById('restaurant-form');
  const restaurantCarousel = document.getElementById('restaurant-carousel');
  let currentIndex = 0;

  restaurantForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const restaurantName = document.getElementById('restaurant-name').value;
      const restaurantDescription = document.getElementById('restaurant-description').value;
      const restaurantPhotoInput = document.getElementById('restaurant-photo');
      const restaurantLocation = document.getElementById('restaurant-location').value;

      // Crie um novo card para o restaurante
      const restaurantCard = document.createElement('div');
      restaurantCard.classList.add('restaurant-card');
      restaurantCard.innerHTML = `
          <h3>${restaurantName}</h3>
          <p>${restaurantDescription}</p>
          <img src="${URL.createObjectURL(restaurantPhotoInput.files[0])}" alt="${restaurantName}" />
          <p>Localização: ${restaurantLocation}</p>
      `;

      // Adicione o card ao carrossel
      restaurantCarousel.appendChild(restaurantCard);

      // Limpe o formulário
      restaurantForm.reset();
  });

  window.changeRestaurant = function (direction) {
      const cardWidth = document.querySelector('.restaurant-card').offsetWidth;
      const maxIndex = restaurantCarousel.childElementCount - 1;

      currentIndex = (currentIndex + direction + restaurantCarousel.childElementCount) % restaurantCarousel.childElementCount;

      const translateValue = -currentIndex * cardWidth;
      restaurantCarousel.style.transform = `translateX(${translateValue}px)`;
  };
});


//Carrinho...

// Simulação de dados fictícios de restaurantes
  const restaurantes = [
    { id:'0001', nome: 'Restaurante 1', descricao: 'Comida deliciosa', foto: './img-restaurantes/rest1.jpg', localizacao: 'Rua 1' },
    { id:'0002', nome: 'Restaurante 2', descricao: 'Ótima vista', foto: './img-restaurantes/rest2.jpg', localizacao: 'Rua 2' },
    { id:'0003', nome: 'Restaurante 3', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest3.jpg', localizacao: 'Rua 3' },
    { id:'0004', nome: 'Restaurante 3', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest4.jpg', localizacao: 'Rua 3' },
    { id:'0005', nome: 'Restaurante 3', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest5.jpg', localizacao: 'Rua 3' },
    { id:'0006', nome: 'Restaurante 3', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest6.jpg', localizacao: 'Rua 3' }
];


document.addEventListener('DOMContentLoaded', function () {
  const restaurantList = document.getElementById('restaurant-list');

  // Preencher a lista de restaurantes
  restaurantes.forEach(restaurante => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <h3>${restaurante.nome}</h3>
          <p>${restaurante.descricao}</p>
          <img id="restArray" src="${restaurante.foto}" alt="${restaurante.nome}" />
          <p>Localização: ${restaurante.localizacao}</p>
          <button id="${restaurante.id}" class="reservar-btn" onclick="openModal()">Reservar</button>
      `;
      restaurantList.appendChild(listItem);
  });

 

  // // Adicione um evento de envio para o formulário de reserva
  // const reservationForm = document.getElementById('reservation-form');
  // reservationForm.addEventListener('submit', function (event) {
  //     event.preventDefault();
  //     // Lógica de reserva aqui (enviar para o servidor, etc.)
  //     closeModal();
  // });

  // // Adicione um evento de clique para abrir o modal quando o botão "Reservar" é clicado
  // restaurantList.addEventListener('click', function (event) {
  //     const target = event.target;
  //     if (target.classList.contains('reservar-btn')) {
  //         openModal();
  //     }
  // });

});

function openModal() {
  const reservationModal = document.getElementById('reservation-modal');
  reservationModal.style.display = 'flex';
}

function closeModal() {
  const reservationModal = document.getElementById('reservation-modal');
  reservationModal.style.display = 'none';
}



//Script do carrinho de compras


// //percorrendo array restaurantes
// const btn = document.querySelector('.reservar-btn');

// for (let i = 0; i < btn.length; i++) { 
//   console.log(btn[i].id);  

//   // if (restaurantes[i].id === '0001') {
    
//   //   capaRest.innerHTML = `
//   //     <img id="restArray" src="${restaurantes[i].foto}" alt="${restaurantes[i].descricao}">
//   //     `
//   //   break;

//   // }
// }




let subtotalInfo = {
    quantidade: 1,
    valor: 11.66,
  };
  let botaoAdd = document.querySelector('#btn-adicionar-produto-01')
  let botaoSubtrair = document.querySelector('#btn-subtrair-produto-01')
  let qtdProdutos = document.querySelector('#quantidade-produto-01')
  qtdProdutos.value = 0
  contagem = 0
  
  botaoAdd.addEventListener('click',() => {
    contagem = contagem +1
    qtdProdutos.value = contagem
    atualizarQuantidadeSubtotal();
  })
  
  botaoSubtrair.addEventListener('click',() => {
    if(contagem > 0){
      contagem = contagem -1
    qtdProdutos.value = contagem
    atualizarQuantidadeSubtotal();
    }
  })
  
  let excluirProdutos = document.querySelector('#btn-excluir-produto-01')
  
  excluirProdutos.addEventListener('click',() =>{
    contagem = 0
    qtdProdutos.value = contagem
    atualizarQuantidadeSubtotal();
  })
  
  qtdProdutos.addEventListener('blur',() =>{
    contagem = qtdProdutos.value
    atualizarQuantidadeSubtotal();
  
  })
  
  let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
  let valorSubtotal = document.getElementById("valor-subtotal");
  
  function atualizarQuantidadeSubtotal() {
  const inputItens = qtdProdutos.value > 1 ? ' Itens' : ' Item'
  quantidadeSubtotal.innerText = qtdProdutos.value + inputItens;
  let calc = qtdProdutos.value * subtotalInfo.valor
  valorSubtotal.innerText = calc.toFixed(2);
  }
  
  