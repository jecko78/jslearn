  const message = new SpeechSynthesisUtterance();
  function onVoicesChanged(){
    const voices = speechSynthesis.getVoices();
//    console.log(voices);
    const vnVoice = voices.find(voice=>voice.lang==='en-GB');
    message.voice = vnVoice;
  };
  
  function onclick(event){
    message.text = event.target.getAttribute('alt');
    speechSynthesis.speak(message);
  };

  function run(){
    speechSynthesis.addEventListener('voiceschanged',onVoicesChanged);

    const imgElems = Array.from(document.querySelectorAll('img'));
    //console.log(imgElems);
    imgElems.forEach(imgElem => imgElem.addEventListener('click',onclick))
  }
  run();

  export {message};