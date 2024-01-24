const menu=document.getElementById('menu');
let count = 1;

function additem(){
    const item = document.createElement('li');
    item.innerText="Item"+(count++)
    menu.appendChild(item);
}
var arr = new Array("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png","25.png","26.png");
var i = 1;
var ref;

function picLibrary(){
    document.images[0].src = arr[i];
    i++    
    
    if(i>25){
        i=0
    }
}

function start(){
    ref = setInterval("picLibrary();", 2500);
}

function stop(){
    clearInterval(ref);
}