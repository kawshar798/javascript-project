(function(){
    const pictures = [
        "slider-0",
        "slider-1",
        "slider-2",
        "slider-3",
        "slider-4",
        "slider-5",
    ];

    //Setup the counter
    let counter = 0;
    //Select button
    const btn = document.querySelectorAll('.icon');
    btn.forEach(function(btn){
        btn.addEventListener('click',function(event){
            let value = event.target;
            
            if(value.classList.contains('btn-left')){
                counter --;
                if(counter < 0){
                    counter = pictures.length-1;
                    //console.log(counter + 'test');
                }
                console.log(counter);
                document.querySelector(".background-image").style.backgroundImage = `url('img/${pictures[counter]}.jpg')`;
            }
            if(value.classList.contains('btn-right')){
                counter ++;
                if(counter > pictures.length-1){
                    counter =0;
                  
                }
                //console.log(counter);
               
                document.querySelector(".background-image").style.backgroundImage = `url('img/${pictures[counter]}.jpg')`;
            }
        });
    });
    
})();