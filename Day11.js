console.log("Hi")
const a = 10;
console.log(a)

const arr=[1,2.1,"something",false]
console.log(arr)
arr[1]=3.1
console.log(arr[1])
arr.push(4)
console.log(arr)

arr.pop()
console.log(arr)
for(let i=0; i<arr.length;i++){
    console.log(arr[i])
}
function example(){
    console.log("i am writing something");
}

const first = document.getElementById("ptag")
first.innerHTML = "paragraph"


const input=document.getElementById("input")
const output=document.getElementById("inputField")

input.addEventListener("input", ()=>{
    output.textContent = input.value
})

const ptag=document.createElement("hi")
ptag.textContent ="some text"
document.body.appendChild(ptag)
ptag.remove()
