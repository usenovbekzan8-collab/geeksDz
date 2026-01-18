

const content = document.querySelectorAll(".container_item")

content.forEach(function(item) {
    const btn = item.querySelector('button')

    btn.addEventListener('click' , function (){
        item.classList.toggle('active')
        btn.textContent = item.classList.contains('active') 
        if (item.classList.contains('active')) {
            btn.textContent = '-';
        } else {
            btn.textContent = '+';
        }
    }) 
    
})

