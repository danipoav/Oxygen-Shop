export function showModal() {

    const modal = document.getElementById('modal');
    modal.classList.add('active')

}

export function closeModal(event) {
    const modal = document.getElementById('modal');

    if (event.target === modal || event.target.id === 'crossModal') {
        modal.classList.remove('active')
        localStorage.setItem('modalClosed', 'true')
    }
}

export function showModalScroll() {
    const scrollHeight = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const progress = (scrollHeight / (documentHeight - windowHeight)) * 100;

    if (progress > 25 && !localStorage.getItem('modalClosed')) {
        showModal();
    }
}

export function showModalWindow() {
    if (!localStorage.getItem('modalClosed')) {
        setTimeout(showModal, 5000);
    }
}

export function sendDataModal(event) {

    const modal = document.getElementById('modal');
    event.preventDefault();
    let valid = true;
    const email = document.getElementById('emailModal');

    const emailvalid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailvalid.test(email.value)) {
        email.classList.add('error');
        valid = false;
    } else {
        email.classList.remove('error')
    }

    if (valid) {
        const formValues = {
            email: email.value,
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
                    email.value = ''
                    modal.classList.remove('active')
                    localStorage.setItem('modalClosed', 'true')
                })//catch
            } else {
                throw new Error('status error')
            }
        })//catch

    }

}




