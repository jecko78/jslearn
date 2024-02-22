const img01 = document.getElementById('img01');
const img02 = document.getElementById('img02');
const img03 = document.getElementById('img03');


function playalphabetsound(filename){
  let audio2 = new Audio();
	audio2.src = filename
	audio2.play();
};

img01.addEventListener('click', function(){
  let fname
  fname="LaoAphabet/1.mp3";
  playalphabetsound(fname);
});

img02.addEventListener('click', function(){
  let fname
  fname="LaoAphabet/2.mp3";
  playalphabetsound(fname);
});

img03.addEventListener('click', function(){
  let fname
  fname="LaoAphabet/3.mp3";
  playalphabetsound(fname);
})

img04.addEventListener('click', function(){
  let fname
  fname="LaoAphabet/4.mp3";
  playalphabetsound(fname);
});

img05.addEventListener('click', function(){
  let fname
  fname="LaoAphabet/5.mp3";
  playalphabetsound(fname);
});

img06.addEventListener('click', function(){
  let fname
  fname="LaoAphabet/6.mp3";
  playalphabetsound(fname);
});


;
/*
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
*/
