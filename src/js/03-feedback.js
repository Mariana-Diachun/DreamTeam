import storageApi from "./storage"
const CONTACT_FORM_KEY = "contact-form-key";

const formRef = document.querySelector(".js-contact-form");
initialPage()
formRef.addEventListener('input', handleInput);
function handleInput(event) {
    let savedData = storageApi.load(CONTACT_FORM_KEY);
    if (!savedData) {
        savedData = {}
    }
        const { name, value } = event.target;

  savedData[name] = value;
  storageApi.save(CONTACT_FORM_KEY, savedData);
  
}

function initialPage() {
    const savedData = storageApi.load(CONTACT_FORM_KEY);
    if (savedData) {
        Object.entries(savedData).forEach(([name, value]) => {
formRef.elements[name].value = value;
        })

    }
}


const handleSubmit = (event) => { 
event.preventDefault()
    const { name, email, message } = event.currentTarget;
    console.log({name: name.value, email: email.value, message: message.value});
    event.currentTarget.reset()
    storageApi.remove(CONTACT_FORM_KEY);
}


formRef.addEventListener("submit", handleSubmit)
