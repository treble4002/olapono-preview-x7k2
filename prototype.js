/* Local demonstration controls only. No network, storage, tracking or keys. */
document.querySelectorAll('[data-demo]').forEach(function(button){button.addEventListener('click',function(){var message=document.getElementById(button.getAttribute('data-demo'));if(message){message.hidden=!message.hidden;button.setAttribute('aria-expanded',String(!message.hidden));}});});
document.querySelectorAll('.mobile-nav a').forEach(function(link){link.addEventListener('click',function(){var menu=link.closest('details');if(menu)menu.open=false;});});
