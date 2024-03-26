const q1 = document.querySelector('.q1>img');
const para = document.querySelector('.q1 > p');
const faq = document.querySelector('.faq > img');
const descript = document.querySelector('.faq > p');
const star = document.querySelector('.star');
const minus = document.querySelector('.minus');
const q3 = document.querySelector('.q3 > img');
const q33 = document.querySelector('.q3 > p');
const q3m = document.querySelector('.q3m');
const q4 =document.querySelector('.q4 > img');
const q44 = document.querySelector('.q4 > p');
const q4m = document.querySelector('.q4m');
const cont = document.querySelector('#container')

q1.addEventListener( 'click', e => {
   para.style.display='none';
   q1.style.display = 'none';
   star.style.display = 'block';
});

star.addEventListener( 'click', e => {
   para.style.display='block';
   q1.style.display = 'block';
   star.style.display = 'none';
   cont.style.height = '37rem';
});

faq.addEventListener( 'click', e => {
   faq.style.display='none';
   descript.style.display = 'block';
   minus.style.display = 'block';

});

minus.addEventListener( 'click', e => {
   faq.style.display='block';
   descript.style.display = 'none';
   minus.style.display = 'none';
});

q3.addEventListener( 'click', e => {
   q3.style.display='none';
   q33.style.display = 'block';
   q3m.style.display = 'block';
});

q3m.addEventListener( 'click', e => {
   q3.style.display='block';
   q33.style.display = 'none';
   q3m.style.display = 'none';

});

q4.addEventListener( 'click', e => {
   q4.style.display='none';
   q44.style.display = 'block';
   q4m.style.display = 'block';
   cont.style.height = '40rem';
});

q4m.addEventListener( 'click', e => {
   q4.style.display='block';
   q44.style.display = 'none';
   q4m.style.display = 'none';
   cont.style.height = '30rem'

});


