document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById('openBtn');
    const surprise = document.getElementById('surprise');
  
    openBtn.addEventListener('click', function () {
      surprise.classList.remove('hidden');
      openBtn.style.display = 'none';
    });
    
  });