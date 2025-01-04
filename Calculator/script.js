// Access the button by its ID
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

const butDelete = document.querySelector('.butD')
// let buttonD = document.getElementById('butD'); 

let string= "";

// buttonD.addEventListener('click', (e) => {
//     string = string.slice(0, string.length-1);
//     input.value = string;
// });

butDelete.addEventListener('click', ()=>{
    string = input.value; 
    string = string.slice(0, string.length-1);
    input.value = string;
});

let buttonArr = Array.from(buttons);
buttonArr.forEach(button=>{
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'D'){
            string = string.slice(0, string.length-1);
            input.value = string;
        }
        
        else if(e.target.innerHTML.length==1){
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});

// Add a click event listener to the button
// button.addEventListener('click', function() {
//     // Display a message when the button is clicked
//     string += "4";
//     input = string;
// });
