const passInput = document.querySelector('.pass-input');
const copyBtn = document.querySelector('.copy');
const lengthP = document.querySelector('.length-number');
const upperCase = document.querySelector('.uppercase');
const lowerCase = document.querySelector('.lowercase');
const numbers = document.querySelector('.numbers');
const symbols = document.querySelector('.symbols');
const generateBtn = document.querySelector('.generateBtn');

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numberCharacters = '0123456789';
const symbolCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword(){
    let str = '';

    if(upperCase.checked){
        str += upperCaseLetters;
    }

    if(lowerCase.checked){
        str += lowerCaseLetters;
    }

    if(numbers.checked){
        str += numberCharacters;
    }

    if(symbols.checked){
        str += symbolCharacters;
    }

    let password = '';
    for(let i = 0; i < lengthP.value; i++){
        let index = Math.floor(Math.random() * str.length);
        password += str[index];
    }

    passInput.value = password;
    console.log(str);
    
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    if(passInput.value === ''){
        alert('please! generate the password first');
    }else{
        navigator.clipboard.writeText(passInput.value);
        alert('Copied the password: ' + passInput.value);
        passInput.value = '';
    }
})