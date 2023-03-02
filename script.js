(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const darkModeBtn = document.querySelector('.dark-mode')
        darkModeBtn.addEventListener('click', darkMode)

        relogio()
    })

    const relogio = () => {
            const containerRelogio = document.querySelector('.box-relogio')
            const divHora = document.querySelector('.relogio-hora')
            let divMinutos = document.querySelector('.relogio-minutos')
            let divSegundos = document.querySelector('.relogio-segundos')

            setInterval(() => {
                const data = new Date()
                const hora = data.getHours()
                const minutos = data.getMinutes()
                const segundos = data.getSeconds()

                divHora.innerHTML = hora
                divMinutos.innerHTML = minutos
                divSegundos.innerHTML = segundos

                if (segundos < 10) {
                    divSegundos.innerHTML = "0" + segundos
                }

                if (minutos < 10) {
                    divMinutos.innerHTML = "0" + minutos
                }
            }, 1000)
    
            console.log('container relogio', containerRelogio)
            console.log('div hora', divHora)
            console.log('div minutos', divMinutos)
            console.log('div segundos', divSegundos)
    }

    const darkMode = () => {
        const body = document.querySelector('body')
        const boxMenu = document.querySelectorAll('.relogio')

        body.classList.toggle('modo-dark')

        boxMenu.forEach(relogio => {
            relogio.classList.toggle('modo-dark')
        })
    }

})()