const check = document.getElementById('check');
const buttonForm = document.getElementById('button-form');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const form = document.getElementById('form');

function validateInputs() {

    inputName.classList.remove('error');
    inputEmail.classList.remove('error');

    if (!inputName.value) {
        inputName.classList.add('error');
        setTimeout(()=>{
            inputName.classList.remove('error');
        }, 1500);
        return false;
    }

    if (!inputEmail.value || !inputEmail.checkValidity()) {
        inputEmail.classList.add('error');
        setTimeout(()=>{
            inputEmail.classList.remove('error');
        }, 1500);
        return false;
    }

    return true;
}

check.addEventListener('click', ()=>{
    if(check.checked){
        buttonForm.disabled = false;
        buttonForm.classList.remove('disabled')
    } else {
        buttonForm.disabled = true;
        buttonForm.classList.add('disabled');
    }
})

buttonForm.addEventListener('click', (event) => {
    event.preventDefault();

    if (validateInputs()) {
        form.submit();
        inputName.value = '';
        inputEmail.value = '';
    }
});