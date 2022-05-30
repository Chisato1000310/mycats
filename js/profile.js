const profile = () => {

    const dataTuna = document.querySelector('.data__tuna')
    const dataMacaron = document.querySelector('.data__macaron')

    const openTuna = () =>{
        dataTuna.classList.toggle('data--opened')
    }
    const openMacaron = () =>{
        dataMacaron.classList.toggle('data--opened')
    }

    dataTuna.addEventListener('click', openTuna)
    dataMacaron.addEventListener('click', openMacaron)

}

profile()