
// block.onclick = function(){

//     const activeClick = document.querySelector(".block.active")
//     activeClick.classList.remove("active")
//     const nextblock = activeClick.nextElementSibling
//     nextblock.classList.add("active")
// }

const blocks = document.querySelectorAll(".block") //querySelectorAll все элементы с классом block
    
    blocks.forEach(block => {                       //forEach берем каждый элемент blocks и пройдемся по ним => приминив к каждой функцию 
        block.addEventListener('click', () => {     // создадим событие к элементу block 'click' и применим функцию 
            blocks.forEach(b => b.classList.remove('active')) // пройдемся по каждому элементу blocks и применм функцию remove('active')
            block.classList.add('active'); // к кликнутоми элементу block добавим active
        })
})                                                                      