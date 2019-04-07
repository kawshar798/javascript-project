(function(){
  let btn = document.querySelector('.btn');
  let box = document.querySelector('.box');
  let ishow = false;

btn.addEventListener('click',function(){
    if(ishow){
        box.style.visibility = 'hidden';
        ishow = false;
        btn.innerHTML = "SHOW";
    }else{
        box.style.visibility = 'visible';
        ishow = true;
        btn.innerHTML = "HIDE";
    }
})
    
})();