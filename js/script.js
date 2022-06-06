// ticket button
const ticketButton = document.getElementById('generate-ticket')

// click on the ticket button
ticketButton.addEventListener ('click',
    function() {
        // value
        const userName = document.getElementById('user-name').value
        const userKm = parseInt(document.getElementById('user-km').value)
        const userAge = document.getElementById('user-age').value

        // price and discount
        const price = userKm * 0.21
        let discount = 0

        if (userAge === 'minorenne') {
            discount = price * 0.2
        } else if (userAge === 'over') {
            discount = price * 0.4
        }

        // final price
        const finalPrice = price - discount
        console.log(finalPrice)

        // your ticket
        document.getElementById('ticket-name').innerHTML = userName

        let typeOffer = 'Biglietto standard'

        if (userAge === 'minorenne') {
            typeOffer = 'Biglietto under 18'
        } else if (userAge === 'over') {
            typeOffer = 'Biglietto over 65'
        } 

        document.getElementById('ticket-offer').innerHTML = typeOffer

        document.getElementById('ticket-carriage').innerHTML = Math.floor(Math.random() * 100)

        document.getElementById('ticket-code').innerHTML = Math.floor(Math.random() * 10000)

        document.getElementById('ticket-cost').innerHTML = finalPrice.toFixed(2) + ' €'

        document.querySelector('.your-ticket').classList.add('active')
    }
)