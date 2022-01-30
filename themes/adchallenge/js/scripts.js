// Add id for news anchor
document.getElementById('block-adchallenge-content').setAttribute('id', 'challenge-news');

// Site slogan add strong
const element = document.querySelector('.site-slogan');
element.innerHTML = '<strong>Music</strong>Theme';

// Insert head script with jquery cdn
var my_awesome_script = document.createElement('script');
my_awesome_script.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
document.head.appendChild(my_awesome_script);

jQuery(function() {

  jQuery(document).ready(function() {
    jQuery(window).scroll(function(){
        if ($(this).scrollTop() > 5) {
           $('header').addClass('dark');
        } else {
           $('header').removeClass('dark');
        }
    });
  });


});
