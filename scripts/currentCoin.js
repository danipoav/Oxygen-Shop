export function currentCoin(event) {

    const prices = {
        red: 0,
        blue: 25,
        green: 60
    }

    const symbols = {
        eur: '€',
        usd: '$',
        gbp: '£'
    }

    const current = event.target.value

    const URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';
    fetch(URL).then((response) => {
        response.json().then(data => {
            const currentTax = data.usd[current]
            Object.keys(prices).forEach(price => {
                const operation = (prices[price] * currentTax).toFixed(0)
                const currentSymbol = symbols[current]
                document.querySelector(`.pricing__content__item__half--price.${price}`).textContent = `${currentSymbol}${operation}`;
            })
        })
    })
}