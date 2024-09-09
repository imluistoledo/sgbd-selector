// Evento para ejecutar codigo al cargar la pagina
document.addEventListener('DOMContentLoaded', () => {
    // Ejecutara el codigo solo si hay parametros de url
    if (window.location.search) {
        // Cadena para el HTML de la lista
        let lista = ''
        // Obtiene el elemento HTML de la lista ordenada
        let html_lista = document.getElementById('list')
        // Obtiene el elemento HTML del popup donde aparece la lista
        const html_popUp = document.getElementById('pop-up')

        // SGBD disponibles
        let mysql = 0, oracle = 0, sqlserver = 0, postgre = 0, mongo = 0

        // Captura la URL actual
        const urlParams = new URLSearchParams(window.location.search)

        // Obtiene los valores de los parametros
        const url_security = parseInt(urlParams.get('security'))
        const url_cost = parseInt(urlParams.get('cost'))
        const url_difficulty = parseInt(urlParams.get('difficulty'))
        const url_scalability = parseInt(urlParams.get('scalability'))
        const url_performance = parseInt(urlParams.get('performance'))
        const url_support = parseInt(urlParams.get('support'))
        const url_compatibility = parseInt(urlParams.get('compatibility'))
        const url_management = parseInt(urlParams.get('management'))
        const url_flexibility = parseInt(urlParams.get('flexibility'))
        const url_backup = parseInt(urlParams.get('backup'))

        // Arreglo de los valores obtenidos
        const arr_values = [
            url_security, url_cost, url_difficulty, 
            url_scalability, url_performance, url_support,
            url_compatibility, url_management, url_flexibility,
            url_backup]

        // Funcion para incrementar las apariciones del sgbd
        const fn_incrementarSGBD = (sgbd) => {
            switch (sgbd) {
                case 1:
                    mysql++
                    break
                case 2:
                    oracle++
                    break
                case 3:
                    sqlserver++
                    break
                case 4:
                    postgre++
                    break
                case 5:
                    mongo++
                    break
                default:
                    break
            }
        }

        // Incrementa el contador para cada valor de la url
        arr_values.forEach(value => {
            if (!isNaN(value)) {
                fn_incrementarSGBD(value)
            }
        })

        // Arreglo para ordenar los valores de los contadores
        let arr_valuesSorted = [
            { name: "MySQL", value: mysql },
            { name: "Oracle", value: oracle },
            { name: "SQLServer", value: sqlserver },
            { name: "PostgreSQL", value: postgre },
            { name: "MongoDB", value: mongo }
        ]

        // Ordena los valores de los contadores
        arr_valuesSorted.sort((a, b) => b.value - a.value)

        // Muestra los contadores ordenados
        console.log('SGBD recomendados:')
        arr_valuesSorted.forEach(value => {
            lista += `
            <li>${value.name}.</li>
            `
            console.log(`${value.name}: ${value.value}`)
        })

        // Agrega la lista al elemento HTML
        html_lista.innerHTML = lista

        // Hace que aparezca el pop up
        html_popUp.classList.remove('hide')

        // Estilo al pop up
        document.body.classList.add('hide')
    }
})

// Obtiene el elemento HTML del boton para reiniciar
document.getElementById('restart').addEventListener('click', () => {
    // Elimina los parámetros de la URL
    window.history.replaceState(null, null, window.location.pathname);
            
    // Recarga la página
    window.location.reload();
})