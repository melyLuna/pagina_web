const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')


targets.forEach(target => {
    target.addEventListener('click', () => {
        content.forEach(c => {
            c.classList.remove('active') /*remover al dar click la clase quetengo activa en el menu*/
        })
        const t = document.querySelector(target.dataset.target)/* selecciona un unico elemento del target*/
        t.classList.add('active')
    })
})