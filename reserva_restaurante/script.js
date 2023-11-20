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

document.addEventListener('DOMContentLoaded', function () {
  // Seu código JavaScript existente

  // Simulação de dados fictícios de restaurantes
  const restaurantes = [
      { nome: 'Restaurante 1', descricao: 'Comida deliciosa', foto: './img-restaurantes/rest1.jpg', localizacao: 'Rua 1' },
      { nome: 'Restaurante 2', descricao: 'Ótima vista', foto: './img-restaurantes/rest2.jpg', localizacao: 'Rua 2' },
      { nome: 'Restaurante 3', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest3.jpg', localizacao: 'Rua 3' },
      { nome: 'Restaurante 3', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest4.jpg', localizacao: 'Rua 3' },
      { nome: 'Restaurante 3', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest5.jpg', localizacao: 'Rua 3' },
      { nome: 'Restaurante 3', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest6.jpg', localizacao: 'Rua 3' }
  ];
  const restaurantList = document.getElementById('restaurant-list');

  // Preencher a lista de restaurantes
  restaurantes.forEach(restaurante => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <h3>${restaurante.nome}</h3>
          <p>${restaurante.descricao}</p>
          <img id="restArray" src="${restaurante.foto}" alt="${restaurante.nome}" />
          <p>Localização: ${restaurante.localizacao}</p>
          <button class="reservar-btn" onclick="openModal()">Reservar</button>
      `;
      restaurantList.appendChild(listItem);
  });

  // Adicione um evento de envio para o formulário de reserva
  const reservationForm = document.getElementById('reservation-form');
  reservationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Lógica de reserva aqui (enviar para o servidor, etc.)
      closeModal();
  });

  // Adicione um evento de clique para abrir o modal quando o botão "Reservar" é clicado
  restaurantList.addEventListener('click', function (event) {
      const target = event.target;
      if (target.classList.contains('reservar-btn')) {
          openModal();
      }
  });
});

function openModal() {
  const reservationModal = document.getElementById('reservation-modal');
  reservationModal.style.display = 'flex';
}

function closeModal() {
  const reservationModal = document.getElementById('reservation-modal');
  reservationModal.style.display = 'none';
}