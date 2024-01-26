  const pmessage = new SpeechSynthesisUtterance();
  function onVoicesChanged(){
    const voices = speechSynthesis.getVoices();
//    console.log(voices);
    const vnVoice = voices.find(voice=>voice.lang==='en-GB');
    pmessage.voice = vnVoice;
  };
  
  function onclick(event){
    pmessage.text = event.target.innerText;
//    console.log(pmessage.text);
    speechSynthesis.speak(pmessage);
  };

  function prun(){
    speechSynthesis.addEventListener('voiceschanged',onVoicesChanged);

    const imgElems = Array.from(document.querySelectorAll('p'));
    //console.log(imgElems);
    imgElems.forEach(imgElem => imgElem.addEventListener('click',onclick))
  }
  prun();

  export {pmessage};