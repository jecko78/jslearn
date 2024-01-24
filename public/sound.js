const button1 = document.getElementById('button1');
const file = document.getElementById('fileupload');

let audio1 = new Audio();
// console.log(audio1);
audio1.src='abcde.m4a';

file.addEventListener('change', function(){
  
})

button1.addEventListener('click', function(){
  audio1.play();
  audio1.addEventListener('playing',function(){
    console.log('Audio 1 started play!');
  })  
  audio1.addEventListener('ended',function(){
    console.log('Audio 1 ended!');    
  })
  
});
