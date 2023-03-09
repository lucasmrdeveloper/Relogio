(() => {
    document.addEventListener('DOMContentLoaded', () => {
        // const categoriasRelogio = document.querySelector('.js-categorias-relogio')
        // const categoriasDespertador = document.querySelector('.js-categorias-despertador')

        // categoriasRelogio.addEventListener('click', relogio)
        // categoriasDespertador.addEventListener('click', despertador)

        relogio()
        despertador()

        data()
        darkMode()
        menuHamburger()
        resize()
    })

    const relogio = () => {
            const containerRelogio = document.querySelector('.box-relogio')
            const container = document.querySelector('main')
            const despertador = document.querySelector('.js-despertador')
            const divHora = document.querySelector('.js-relogio-hora')
            const categoriasRelogio = document.querySelector('.js-categorias-relogio')
            let divMinutos = document.querySelector('.js-relogio-minutos')
            let divSegundos = document.querySelector('.js-relogio-segundos')

            despertador.classList.add('hidden')
            container.classList.remove('h-5/6')

            categoriasRelogio.classList.add('bg-blue-400', 'w-full', 'rounded-t-md')

            setInterval(() => {
                const data = new Date()
                const hora = data.getHours()
                const minutos = data.getMinutes()
                const segundos = data.getSeconds()    

                divHora.innerHTML = hora
                divMinutos.innerHTML = minutos
                divSegundos.innerHTML = segundos

                console.log('div minutos', divMinutos.textContent)

                if (segundos < 10) {
                    divSegundos.innerHTML = "0" + segundos
                }

                if (minutos < 10) {
                    divMinutos.innerHTML = "0" + minutos
                }
            }, 1000)
    }

    const despertador = () => {  
        const container = document.querySelector('main')
        const relogio = document.querySelector('.js-relogio')
        const data = document.querySelector('.js-data')
        const despertador = document.querySelector('.js-despertador')
    
    
        container.classList.add('h-5/6')
        relogio.append(despertador)
        relogio.classList.add('flex-col', 'h-full')
        data.classList.add('top-32')
    
        despertador.classList.remove('hidden')
        despertador.classList.add('mt-8')

        let minutos = document.querySelector('.js-relogio-minutos').textContent

        console.log('minutos', minutos)
    
    }

    const data = () => {
        const data = new Date()
        const diaDaSemana = data.getDay()
        const dia = data.getDate()
        const mes = data.getMonth()
        const ano = data.getFullYear()
        let elementoData = document.querySelector('.js-data')

        diaNome = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
        diaMes = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Março', 'Abril')

        elementoData.innerHTML =  `${diaNome[diaDaSemana]} , ${dia} de ${diaMes[mes]} de ${ano}`
    }

    const darkMode = () => {
        const btndarkMode = document.querySelector('.js-btn-dark-mode')
        const icon = document.querySelector('.js-muda-btn-dark-mode')

        const atributo = icon.getAttribute('name')

        // console.log('atributo', atributo)

        btndarkMode.addEventListener('click', teste)
      
        const dark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const body = document.querySelector('.js-dark-mode')

        function teste() {  
            if (dark) {
                icon.setAttribute('name', 'sunny')
                body.style.background = 'black'
                body.setAttribute('modo-dark', 'ativado')

                console.log('body', body.getAttribute('modo-dark'))
            }

           else {
                icon.setAttribute('name', 'moon')
                body.style.background = 'white'
            }


     
            // else if(atributo )){
            //     body.style.background = 'blue'
            //     console.lgo*('não é darik')
            // }
        }

        console.log('icon', )

        // if(window.matchMedia("prefers-color-scheme: dark") == true) {
        //     console.log('funciona')
        // }
        // else {
        //     console.log('não funciona')
        // }

        // if (divIcon.classList.contains('modo-dark')) {
        //     icon.setAttribute("name", "sunny-outline")   
        // }
        // else{
        //     icon.setAttribute("name", "moon-outline")   
        // }

    }

    const menuHamburger = () => {
        const menuIcone = document.querySelector('.js-menu-hamburger')
        const menu = document.querySelector('.js-menu')
        const categorias = document.querySelector('.js-categorias')


        menuIcone.addEventListener('click', teste)


        function teste() {
            menu.classList.toggle('hidden')
            menu.classList.toggle('inline-block')
            categorias.classList.remove('hidden')


            menu.append(categorias)
        }
    }

    const resize = () => {
        const btnResize = document.querySelector('.js-btn-resize')

        btnResize.addEventListener('click', toggleFullScreen)

        function toggleFullScreen() {

            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen()
            } 
            else if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        }
    }

})()