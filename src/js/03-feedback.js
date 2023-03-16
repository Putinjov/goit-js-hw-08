import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = {};
const { email, message } = form.elements;

reloadPage();

function onInputData(event) {
  dataForm[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      dataForm = JSON.parse(savedData);
      Object.entries(dataForm).forEach(([key, value]) => {
        form[key].value = value;
      });
    }
  } catch (error) {
    console.error(error);
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(dataForm);

  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  }

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  dataForm = {};
}