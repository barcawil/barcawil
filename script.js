document.getElementById('year').textContent = new Date().getFullYear();

  const musicMenus = document.querySelectorAll('.music-menu');
  musicMenus.forEach(function(menu){
    const trigger = menu.querySelector('.music-trigger');
    trigger.addEventListener('click', function(e){
      e.preventDefault();
      const isOpen = menu.classList.contains('open');
      musicMenus.forEach(function(m){ m.classList.remove('open'); });
      if(!isOpen) menu.classList.add('open');
    });
  });
  document.addEventListener('click', function(e){
    if(!e.target.closest('.music-menu')){
      musicMenus.forEach(function(m){ m.classList.remove('open'); });
    }
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      musicMenus.forEach(function(m){ m.classList.remove('open'); });
    }
  });

  const form = document.getElementById('signupForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    if(email){
      status.textContent = "Thanks — you're on the list.";
      status.classList.add('ok');
      form.reset();
    }
  });
