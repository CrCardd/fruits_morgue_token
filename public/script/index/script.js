let orders = document.querySelectorAll('.order')

orders.forEach((order) => {
    let buttons = order.querySelectorAll('button')
    let quantity = order.querySelector('.quantity')
    buttons[0].addEventListener('click', () => {
        if(parseInt(quantity.innerHTML, 10) < 10)
            quantity.innerHTML = parseInt(quantity.innerHTML, 10)+1
        console.log('COLOCA')
    })
    buttons[1].addEventListener('click', () => {
        if(parseInt(quantity.innerHTML, 10) > 0)
            quantity.innerHTML = parseInt(quantity.innerHTML, 10)-1
        console.log('TIRA')
    })
})

const finish_button = document.getElementById('botao_finalishar')

finish_button.addEventListener('click', () => {
    let nome = document.getElementById('nome')
    
    let orders = document.querySelectorAll('.order')
    orders.forEach( async (order) => {
        let id = parseInt(order.querySelector('#id_product').innerHTML,10)
        let quantity = parseInt(order.querySelector('.quantity').innerHTML,10)
        
        if(quantity > 0){
            console.log("id:" + id + "   quantity: " + quantity)
            await fetch(`/fazerPedido/${id}/${quantity}`, {method: 'POST'})
        }
    })

})