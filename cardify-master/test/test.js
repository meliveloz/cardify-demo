
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html><body><div class="cardify"><img class ="img-responsive col" src="../assets/img/tres.jpg" alt="hola test"></></div></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
}; 

const $ = require('jquery');
var chai = require('chai');
var plugin = require('chai-jq');
// Inject plugin.
chai.use(plugin);

const cardify = require('../src/app');

describe('cardify', () => {
  $('.container').cardify();

  it('Passes si figure no tiene atributo class', () => {
    chai.expect($('figure')).to.not.have.$data('class');
  });
   
  it('Passes cuando figcaption tiene position absolute', () => {
    chai.expect($('figcaption')).to.have.$css('position', 'absolute');
  });
  it('Passes cuando h3 tiene class text-caption', () => {
    chai.expect($('h3')).to.have.$class('text-caption');
  });
  it('Passes cuando el atributo src no esta vacio ', () => {
    $('img').attr('src') !== '';
  });
  it('Passes cuando el body tiene hijos', () => {
    dom.window.document.body.children.length >= 1;
    // quiero saber si existen elementos en el body
  });
  it('Passes cuando existen imagenes dentro de container', () => {
    $('.container').children('img').length >= 1; 
  });

  it('Passes cuando el atributo alt no esta vacio', () => {
    $('img').attr('alt') !== '';
  });

  it('Passes cuando la imagen es png o jpg', () => {
    $('img').attr('src').substring(('img').lastIndexOf('.')) === '.jpg' || '.png' || '.gif'; 
  });
  
  it('Passes si figure no tiene atributo class', () => {
    chai.expect($('.text-caption')).to.have.$css('position', 'absolute');
  });

  /*
  it('passes si imagen es del mismo ancho que figcaption', () => {

    $('img').width() === $('figcaption').width();
  });
  it('passes si imagen es del mismo ancho que figcaption', () => {
    expect(('img').width()).to.equal(('figcaption').width());
  })
  it('passes si imagen es del mismo ancho que figcaption', () => {
    $('img').width() === $('figure').width();

  });*/
  it('Passes si figure tiene position relative', () => {
    chai.expect($('figure')).to.have.$css('position', 'relative');
  });

  it('Passes si la imagen tiene class responsive', () => {
    chai.expect($('img')).to.have.$class('img-responsive');
  });

  it('Passes si la imagen tiene class col', () => {
    chai.expect($('img')).to.have.$class('col');
  });

  it('Passes si existe div posee una class', () => {
    chai.expect($('div')).to.have.$class('cardify');
  });
});
afterEach(function(done) { // dynamic cat test !
  setTimeout(done, 200);
});

