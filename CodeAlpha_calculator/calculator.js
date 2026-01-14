const btne = document.querySelectorAll("button")
// console.log(btne);
const inpute = document.getElementById("result")
for(let i=0; i<btne.length; i++){
    btne[i].addEventListener("click", ()=>{
        const btnvalue = btne[i].textContent
        if(btnvalue === "C"){
            clearResult()
        }
        else if(btnvalue === "="){
            calculateresult()
        }
        else{
            appendvalue(btnvalue)
        }
    })
}
function clearResult(){
    inpute.value = ""
}
function calculateresult(){
    inpute.value = eval(inpute.value)
}
function appendvalue(btnvalue){
    inpute.value += btnvalue
}