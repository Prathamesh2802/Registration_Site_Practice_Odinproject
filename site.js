let pass = document.querySelector('#pass');
let confpass = document.querySelector('#confpass');
let li = document.createElement('li');
let spantext = document.querySelector('#spantext');
confpass.addEventListener('input', () => {
    if (pass.value !== confpass.value) {   
        pass.style.border = '1px solid red';
        confpass.style.border = '1px solid red';
        li.textContent = "Passwords do not match";
        spantext.appendChild(li);
    } else if (pass.value.length === 0 && confpass.value.length === 0) {
        pass.style.border = '1px solid blue';
        confpass.style.border = '1px solid blue';
        spantext.removeChild(li);
    } else {
        pass.style.border = '1px solid blue';
        confpass.style.border = '1px solid blue';
        spantext.removeChild(li);
    }
});