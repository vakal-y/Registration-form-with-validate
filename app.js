const form = document.forms.form;
const inputName = form.elements.name;
const inputEmail = form.elements.email;
const inputAge = form.elements.age;
const inputPassword = form.elements.password;
const inputRePassword = form.elements.repeatPassword;
const select = form.elements.select;
const selectedOption = select.options[select.selectedIndex].value;
const checkbox = form.elements.checkbox;
const inputs = document.querySelectorAll('input');


function checkName() {
    if (inputName.validity.valueMissing) {
        document.getElementById('name-error').textContent = 'Заполните поле формы';
        inputName.classList.add('error');
    } else if (inputName.validity.tooShort) {
        document.getElementById('name-error').textContent = 'Имя слишком короткое';
        inputName.classList.add('error');
    } else if (inputName.validity.tooLong) {
        document.getElementById('name-error').textContent = 'Имя слишком длинное';
        inputName.classList.add('error');
    } else {
        document.getElementById('name-error').textContent = '';
        inputName.classList.remove('error');
    }
}

function checkEmail() {
    if (inputEmail.validity.valueMissing) {
        document.getElementById('email-error').textContent = 'Заполните поле формы';
        inputEmail.classList.add('error');
    } else if (inputEmail.validity.typeMismatch) {
        document.getElementById('email-error').textContent = 'Неверный формат';
    } else {
        document.getElementById('email-error').textContent = '';
        inputEmail.classList.remove('error');
    }
}

function checkAge() {
    if (inputAge.validity.valueMissing) {
        document.getElementById('age-error').textContent = 'Заполните поле формы';
        inputAge.classList.add('error');
    } else {
        document.getElementById('age-error').textContent = '';
        inputAge.classList.remove('error');
    }
}

function checkPassword() {
    if (inputPassword.validity.valueMissing) {
        document.getElementById('password-error').textContent = 'Заполните поле формы';
        inputPassword.classList.add('error');
    } else if (inputPassword.validity.patternMismatch) {
        document.getElementById('password-error').textContent = 'Неверный формат';
        inputPassword.classList.add('error');
    } else if (inputPassword.validity.tooShort) {
        document.getElementById('password-error').textContent = 'Пароль слишком короткий';
        inputPassword.classList.add('error');
    } else if (inputPassword.validity.tooLong) {
        document.getElementById('password-error').textContent = 'Пароль слишком длинный';
        inputPassword.classList.add('error');
    } else {
        document.getElementById('age-error').textContent = '';
        inputAge.classList.remove('error');
    }
}

function checkRePassword() {
    if (inputRePassword.value !== inputPassword.value) {
        document.getElementById('repeat__password-error').textContent = 'Пароли не совпадают';
        inputRePassword.classList.add('error');
    } else if (inputRePassword.validity.valueMissing) {
        document.getElementById('repeat__password-error').textContent = 'Заполните поле формы';
        inputRePassword.classList.add('error');
    }
    else {
        document.getElementById('repeat__password-error').textContent = '';
        inputRePassword.classList.remove('error');
    }
}

function checkSelect() {
    if (!selectedOption.selected) {
        document.getElementById('select-error').textContent = 'Выберите пункт';
        select.classList.add('error');
    } else {
        document.getElementById('select-error').textContent = '';
        select.classList.remove('error');
    }
}

function checkCheckbox() {
    if (!checkbox.checked) {
        document.getElementById('submit-error').textContent = 'Необходимо дать согласие на обработку данных';
        checkbox.classList.add('error');
    } else {
        document.getElementById('submit-error').textContent = '';
        checkbox.classList.remove('error');
    }
}

function logFormValues() {
    if (inputName.value && inputEmail.value && inputAge.value && inputPassword.value && inputRePassword.value && select.value && checkbox.checked) {
        inputs.forEach(function (input) {
            console.log(input.value);
        })
    }
}



form.addEventListener('submit', function (event) {
    event.preventDefault();

    checkName();
    checkEmail();
    checkAge();
    checkSelect();
    checkPassword();
    checkRePassword();
    checkCheckbox();

    logFormValues();
    form.reset();
});

