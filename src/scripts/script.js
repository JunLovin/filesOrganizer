const form = document.querySelector('.form-message');
const gitBtn = document.querySelectorAll('.git-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

for (let i = 0; i < gitBtn.length; i++) {
    gitBtn[i].addEventListener('click', () => {
        window.open('https://github.com/JunLovin', '_target')
    })
}