
const content = document.querySelectorAll(".container_item")

content.forEach(function (item) {
    const btn = item.querySelector('button')

    btn.addEventListener('click', function () {

        content.forEach(function(block) {
            block.classList.remove('active')
            block.querySelector('button').textContent = '+'
        })
        
        item.classList.add('active')
        btn.textContent = '-'
    })
})