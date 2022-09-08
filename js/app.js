let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) =>{
        display.style.color = 'black';

        if (display.innerText === 'Error!') {
            return display.innerText = e.target.innerText
        };

        switch (e.target.innerText) {  
            case 'C':
                display.innerText = ''; 
                break; 

            case '⇚':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);  
                }
                break;

            case '=':
                if (display.innerText === '') {
                    return ''
                }   else{
                    try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!'
                    display.style.color = 'red';
                }
                }
                break;

            default:
                display.innerText += e.target.innerText;
                break;
        }
    });
});