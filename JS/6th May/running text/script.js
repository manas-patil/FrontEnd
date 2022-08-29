
const textElement = document.getElementById("text")

const text = "We love Programming!"

let idx = 0;

printText()


function printText(){
    textElement.innerHTML = text.slice(0, idx);

    idx++;

    if(idx>text.length){
        idx=0;
    }
    setTimeout(printText,160)
}