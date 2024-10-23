export const returnTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, 200)
}

export function buttonAppearance() {

    const button = document.getElementById('return--top');
    console.log('sape')
    const scrollHeight = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const progress = (scrollHeight / (documentHeight - windowHeight)) * 100;

    if (progress > 60) {
        button.classList.add('active')
    } else {
        button.classList.remove('active')
    }

}