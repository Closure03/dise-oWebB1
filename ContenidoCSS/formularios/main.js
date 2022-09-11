const form = document.getElementById('form');
const btn = document.getElementById('btnDatos');
const names = document.getElementById('inputNames');
const age = document.getElementById('inputAge');
const email = document.getElementById('inputEmail');
const city = document.getElementById('inputCity');
const policy = document.getElementById('checkPolitica');

//Control de calidacion

const objectValid = {
    nombres: false,
    edad: false,
    correo: true,
    ciudad: true,
    politica: false
};

//Validar el formulario

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validForm() === -1){
        alert('Enviando el formulario');
    }else{ 
        alert('error en valores de formulario');
    }
});

//validar el formulario completo

const validForm = () => {
    const values = Object.values(objectValid);
    let response = values.findIndex(e => e=== false);
    return response;

};

names.addEventListener('change',(e/*evento*/) => {
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{4,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorNames = e.target.value;
    objectValid.nombres = e.target.value.match(namesRegex)
     console.log(Object.values(objectValid));

});
age.addEventListener('change', (e) => {
   const ageRegex = /^(^[0-9]{1,2}$)/g;
   if ((age.value.match(ageRegex)) && ((parseInt(age.value))>=18)) {
    objectValid.edad = true;
   }else{
    objectValid.edad = false;
   }
   console.log(Object.values(objectValid));
});

policy.addEventListener('change', (e) => {
    objectValid.politica = e.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});

email.addEventListener('change',(e/*evento*/) => {
    const namesRegex = /^([a-zA-Z@a-z.a-z]{4,25})$/g;
    let valorNames = e.target.value;
    objectValid.correo = e.target.value.match(namesRegex);
    console.log(Object.values(objectValid));
});

city.addEventListener('change', (e) => {
    if ( city.value.match != '0') {
        objectValid.ciudad = true;
        console.log(Object.values(objectValid));
       }else if (city.value.match === '0'){
        objectValid.ciudad = false;
        console.log(Object.values('valor errado'));
       }
       

});