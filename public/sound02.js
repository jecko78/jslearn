const img01 = document.getElementById('img01');
const img02 = document.getElementById('img02');
const img03 = document.getElementById('img03');
const img04 = document.getElementById('img04');
const img05 = document.getElementById('img05');
const img06 = document.getElementById('img06');

let audio1 = new Audio();
let audio2 = new Audio();
let audio3 = new Audio();
// console.log(audio1);
audio1.src='LaoAphabet/1.mp3';
img01.addEventListener('click', function(){
  audio1.play();
  audio1.addEventListener('playing',function(){
    console.log('Audio 1 started play!');
  })  
  audio1.addEventListener('ended',function(){
    console.log('Audio 1 ended!');    
  })
  
});

audio2.src='LaoAphabet/2.mp3';
img02.addEventListener('click', function(){
  audio2.play();
  audio2.addEventListener('playing',function(){
    console.log('Audio 1 started play!');
  })  
  audio2.addEventListener('ended',function(){
    console.log('Audio 1 ended!');    
  })
  
});

audio3.src='LaoAphabet/3.mp3';
img03.addEventListener('click', function(){
  audio3.play();
  audio3.addEventListener('playing',function(){
    console.log('Audio 1 started play!');
  })  
  audio3.addEventListener('ended',function(){
    console.log('Audio 1 ended!');    
  })
  
});
