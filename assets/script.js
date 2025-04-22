document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById('openBtn');
    const surprise = document.getElementById('surprise');
    const preCard = document.getElementById('pre-card');
  
    openBtn.addEventListener('click', function () {
      surprise.classList.remove('hidden');
      preCard.style.display = 'none'; // Esconde tudo que aparece antes
    });
  });
  