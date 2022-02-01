const container =document.querySelector('#container');
const buttonCapitalLetter = document.querySelector('#capitalLetter');
const buttonLowerCase = document.querySelector('#lowerCase');
const buttonCapitalize = document.querySelector('#capitalize');
const buttonClear=document.querySelector('#clear');

buttonCapitalLetter.addEventListener('click',CapitalLetter);

function CapitalLetter(){
    container.value=container.value.toUpperCase();
}

buttonLowerCase.addEventListener('click', LowerCase);

function LowerCase(){
    container.value=container.value.toLowerCase();
}

buttonCapitalize.addEventListener('click', Capitalize);

function Capitalize(){
    let text="";
    let arraystring = container.value.trimEnd().split(' ');
    arraystring.forEach(element => {
        const mayuscula= element[0].toUpperCase()+element.slice(1).toLowerCase();
        text=text+mayuscula+" ";
    });
    container.value=text;
}

buttonClear.addEventListener('click', Clear);

function Clear(){
    container.value="";
}