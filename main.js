const firebaseConfig = {
    apiKey: "AIzaSyDQtyyn8XJuSKjV-UGlqUvK9XMMXsA4H5U",
    authDomain: "contactform-ab022.firebaseapp.com",
    databaseURL: "https://contactform-ab022-default-rtdb.firebaseio.com",
    projectId: "contactform-ab022",
    storageBucket: "contactform-ab022.appspot.com",
    messagingSenderId: "874480634620",
    appId: "1:874480634620:web:09f288040cfc9d4ec56579"
}; 

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contact-Form").addEventListener("submit", submitForm);


function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var select = getElementVal("select");
    var msg = getElementVal("msg");

   saveMessages(name, emailid, select, msg);

   document.querySelector(".alert").style.display = "block";

   setTimeout(() =>{
    document.querySelector(".alert").style.display = "none";

   }, 3000);

   document.getElementById("contact-Form").reset();
}

const saveMessages = (name, emailid, select, msg) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        select : select,
        msg : msg
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};