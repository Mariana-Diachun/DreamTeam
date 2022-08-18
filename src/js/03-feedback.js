import storageApi from "./storage"
console.log(storageApi);
const CONTACT_FORM_KEY = "contact-form-key";

const formRef = document.querySelector(".js-contact-form");
console.log(formRef);
initialPage()
formRef.addEventListener('input', handleInput);
const formData = {};
function handleInput(event) {
  const { name, value } = event.target;

  formData[name] = value;
  storageApi.save(CONTACT_FORM_KEY, formData);
  
}

function initialPage() {
    const savedData = storageApi.load(CONTACT_FORM_KEY);
    if (savedData) {
        Object.entries(savedData).forEach(([name, value]) => {
formRef.elements[name].value = value;
            console.log(name);
            console.log(value);
        })

    }
    console.log(savedData);
}

