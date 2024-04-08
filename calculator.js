let display = document.getElementById('display');
let allButtons = document.querySelectorAll("button");
let sumCalculate = document.querySelector(".sum")

console.log(allButtons);

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}


allButtons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.value=='AC') document.getElementById('display').value = '';
        else if(e.target.value=='DEL'){
            document.getElementById('display').value = document.getElementById('display').value.slice(0,-1);
        }
        else if(e.target.value!='='){
            document.getElementById('display').value += e.target.value;
        }
    })
})