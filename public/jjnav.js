(()=>{
  const message = new SpeechSynthesisUtterance();
  function onVoicesChanged(){
    const voices = speechSynthesis.getVoices();
    console.log(voices);
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
})();

const path = "../"
const jnav = document.querySelector('.js-nav');
jnav.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="${path}index.html">IU APP</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="${path}index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${path}alphab.html">ພະຍັນຊະນະ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${path}jvidshow.html">ວິດີໂອປະກອບການຮຽນ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${path}/index.html">QR_Gen</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ComputerLanguage
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="${path}learnjavascript.html">ຮຽນ javascript</a></li>
          <li><a class="dropdown-item" href="${path}learngame.html">ຮຽນ Build Game</a></li>
          <li><a class="dropdown-item" href="${path}learndatabase.html">ຮຽນ sqlite3</a></li>
          <li><a class="dropdown-item" href="${path}L_canvas/learncanva1.html">ຮຽນ Particle</a></li>
          <li><a class="dropdown-item" href="${path}L_canvas/learncanva2.html">ຮຽນ Particle2</a></li>
          <li><a class="dropdown-item" href="${path}L_canvas/learncanva3.html">ຮຽນ Particle3</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="${path}learnsound.html">ຮຽນ Sound</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="${path}lessontest.html">ຮຽນ Loading</a></li>
          <li><a class="dropdown-item" href="${path}fallingstar.html">ຮຽນ falling stars</a></li>
        </ul>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          css practice Items
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="L_canvas/learncanva1.html">ຮຽນ Particle</a></li>
          <li><a class="dropdown-item" href="L_canvas/learncanva2.html">ຮຽນ Particle2</a></li>
          <li><a class="dropdown-item" href="L_canvas/learncanva3.html">ຮຽນ Particle3</a></li>
          <li><a class="dropdown-item" href="lessontest.html">ຮຽນ Loading</a></li>
          <li><a class="dropdown-item" href="fallingstar.html">ຮຽນ falling stars</a></li>
          <li><a class="dropdown-item" href="GGborder/index.html">ຮຽນ Glowing Gradient Box</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="learnsound.html">ຮຽນ Sound</a></li>
        </ul>
      </li>      
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`;

