$(document).ready(function() {
  console.log('lp_mods_init');
  localData = JSON.parse(localStorage.data);
  $('.character img').attr('src', localData.player.image).attr('width', '300px');

  $('#loginnameinput').val('pepe');
  $('#loginpwinput').val('pepe');
  setTimeout('app.tryStartingGame()', 2000);


  $('.level').click(function(event) {
    
    event.stopPropagation();
    app.closeInGameScroll('selectscreen');
  
    game.teleport({
      x: $(this).data('x'),
      y: $(this).data('y')
    });

  });

});