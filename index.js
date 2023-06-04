const modal = document.querySelector('.modal-success');
const submitBtn = document.getElementById('submit-button');
const dismissBtn = document.querySelector('.modal-close')
const container = document.querySelector('.form-container');
const emailInput = document.getElementById('email');
const form = document.querySelector('.sign-up-form');
const email = document.querySelector('.email-placeholder');
const failMessage = document.querySelector('.message');

submitBtn.addEventListener('click', (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        openModal();
        e.preventDefault();
    } else {
        emailInput.classList.add('fail');
        failMessage.classList.add('fail-message');
    }
})

dismissBtn.addEventListener('click', () => {
    modal.close();
    container.classList.remove('active');
    emailInput.value = '';
    emailInput.setAttribute('required', true);
    location.reload();
});

dismissBtn.addEventListener('keypress', () => {
    modal.close();
    container.classList.remove('active');
    emailInput.value = '';
    emailInput.setAttribute('required', true);
    location.reload();
});

function openModal() {
    modal.close();
    modal.showModal();
    container.classList.add('active');
    email.setHTML(emailInput.value);
}