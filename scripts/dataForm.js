//funcion enviar datos del formulario a una API

export function sendData(event) {

    event.preventDefault();

    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const checkbox = document.getElementById('checkbox');

    if (name.value.length < 2 || name.value.length > 100) {
        name.classList.add('error')
        valid = false;
    } else {
        name.classList.remove('error')
    }

    const emailvalid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailvalid.test(email.value)) {
        email.classList.add('error');
        valid = false;
    } else {
        email.classList.remove('error')
    }

    if (!checkbox.checked) {
        checkbox.style.boxShadow = '0 0 0 0.1rem red';
        valid = false;
    } else {
        checkbox.style.boxShadow = '';
    }

    if (valid) {

        const formValues = {
            name: name.value,
            email: email.value,
            terms: checkbox.checked
        }

        const URL = 'https://jsonplaceholder.typicode.com/posts'

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        }).then((response) => {
            if (response.status === 201 || response.ok) {
                response.json().then(data => {
                    console.log('succes:', data);
                    alert('Data sent successfully')
                    name.value = ''
                    email.value = ''
                    checkbox.checked = false
                })//catch
            } else {
                throw new Error('status error')
            }
        })//catch

    }

}