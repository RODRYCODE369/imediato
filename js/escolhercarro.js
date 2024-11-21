// Função para filtrar os carros com base na categoria selecionada
function filterCars(category) {
  // Seleciona todos os cards da página
  const cards = document.querySelectorAll('.card');
  
  // Se a categoria for 'all', exibe todos os carros
  if (category === 'all') {
      cards.forEach(card => {
          card.style.display = 'block';  // Exibe todos os cards
      });
  } else {
      // Caso contrário, filtra os carros pela categoria selecionada
      cards.forEach(card => {
          if (card.getAttribute('data-category') === category) {
              card.style.display = 'block';  // Exibe o card
          } else {
              card.style.display = 'none';   // Esconde o card
          }
      });
  }
}
