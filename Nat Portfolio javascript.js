var nav = document.querySelector('nav');
var position = 0;

// window.addEventListener('scroll', function(){
//   if(window.pageYOffset > 100) {
//     nav.classList += ' small';
//   } else {
//     nav.classList = 'main-nav';
//   }
// });

window.addEventListener('scroll', function(){
  if(position < window.pageYOffset) {
    //console.log('down')
    nav.classList += ' up';
    position = window.pageYOffset;
  } else {
    //console.log('up');
    nav.classList = 'nav small'
    position = window.pageYOffset;
  }
})
