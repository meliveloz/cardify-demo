const $ = require('jquery');
const cardify = {};
$(document).ready(() => {
  $('.cardify').cardify(); // sirve para cualquier clase de container.
});
(function($) {
  $.fn.cardify = function() { 
    this.find('img').wrap('<figure></figure>'); // Encuentra las imagenes dentro de la class y las envuelve en <figure>
    this.find('figure').map(function() {
      $(this).append(`<figcaption><h3 class="text-caption">${$(this).children('img').attr('alt')}</h3></figcaption>`);
    }); // encuentra y recorre los figure dentro de la class y agrega un figcaption que tiene como contenido lo escrito en ALT.
    this.find('figure').map(function() { // Encuentra los figure dentro de la class y agrega estilo.
      $(this).css({
        'position': 'relative',
        'width': '100%'
      });
    });
    $('figcaption').css({ // Estilos.
      'position': 'absolute',
      'top': '0',
      'bottom': '0',
      'left': '0',
      'right': '0',
      'height': '100%',
      'width': '100%',
      'opacity': '0',
      'transition': '.8s ease',
      'background-color': 'rgba(255,255,255, 0.6)'
    });  
    $('.text-caption').css({
      'color': 'black',
      'font-size': '2em',
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)',
      '-ms-transform': 'translate(-50%, -50%)',
      'text-align': 'center'
    });
    $('figure figcaption').hover(function() {
      $(this).css({
        'opacity': '1',
        'border': '2px solid black'
      });
    },
    function() {
      $(this).css({
        'opacity': '0',
        'border': 'none'
      });
    }
    );
  };
})($);
module.exports = cardify;