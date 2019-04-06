(function(){

    let counterValue = 0;

    const buttons = document.querySelectorAll('.btn');
    const counter = document.querySelector('.result');

    buttons.forEach(function(btn){
        btn.addEventListener('click',function(event){
            const value = event.target;
            
            if(value.classList.contains('lower')){
                counterValue --
                
            }else if(value.classList.contains('add')){
                counterValue ++
            }


            counter.textContent = counterValue;

            //change text color 

            if(counterValue === 0 ){
                counter.style.color = '#17a2b8';
            }else if(counterValue > 0){
                counter.style.color = '#007bff';
            }else if(counterValue < 0){
                counter.style.color = '#dc3545';
            }
           
        });
    });
})();