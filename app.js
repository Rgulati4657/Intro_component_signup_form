const firstName = document.querySelector('input[id = "firstName"]');
const lastName = document.querySelector('input[id = "lastName"]');
const email = document.querySelector('input[id = "emailAddress"]');
const password = document.querySelector('input[id = "password"]');
const inputs = document.querySelectorAll('input');
function writeError(){ 
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(firstName.value === ""){
        firstName.classList.add('error','errorlogo');
        firstName.nextElementSibling.classList.remove("disp");
        firstName.nextElementSibling.innerText="first Name cannot be empty";
    }
    if(lastName.value === ""){
        lastName.classList.add('error','errorlogo');
        lastName.nextElementSibling.classList.remove("disp");
        lastName.nextElementSibling.innerText="Last Name cannot be empty";
    }     
    if(password.value === ""){
        password.classList.add('error','errorlogo');
        password.nextElementSibling.classList.remove("disp");
        password.nextElementSibling.innerText="password cannot be empty";
    }     
    if(!email.value.match(pattern)){
        email.classList.add('error','errorlogo');
        email.nextElementSibling.classList.remove("disp");
        if(email.value === ""){
            email.setAttribute('placeholder','Email Address');
            email.classList.remove('custom-placeholder');
            email.nextElementSibling.innerText="email cannot be empty";
        }else{
            email.setAttribute('placeholder','email@example/com');
            email.classList.add('custom-placeholder');
            email.nextElementSibling.innerText="looks like this is not an email";
        }
    }     
}
inputs.forEach((inp)=>{
    inp.addEventListener('change',()=>{
        inp.nextElementSibling.classList.add('disp');
        inp.classList.remove("error" , 'errorlogo');
    })
    inp.addEventListener('click',()=>{
        inp.nextElementSibling.classList.add('disp');
        inp.classList.remove("error" , 'errorlogo');
    })
    inp.addEventListener('keydown',()=>{
        inp.nextElementSibling.classList.add('disp');
        inp.classList.remove("error" , 'errorlogo');
    })
})

const btn = document.querySelector('button');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    writeError();
});