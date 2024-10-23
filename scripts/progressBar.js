//funcion barra progresiva

export const updateProgressBar = () => {
    const progressBar = document.getElementById('progressBar')

    const scrollHeight = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const progress = (scrollHeight / (documentHeight - windowHeight)) * 100;

    progressBar.style.width = progress + '%';
}
