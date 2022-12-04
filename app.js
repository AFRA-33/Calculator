// var inp = document.getElementById('inp')
// var render = document.getElementById('render')
// var ul=document.getElementById('list')
// var obj;
// var arr = []
// var i;
// function submit(e){
//     e.preventDefault()
//   obj = {
//         task:inp.value,
//         dateTime:new Date()
//     }
// arr.push(obj);
// console.log(inp.value)
// show()
// }
// function show(){
//     ul.innerHTML = ''
//     for( i = 0 ; i<=arr.length ; i++){
//         ul.innerHTML+= `<li class="edit">${arr[i].task}<button onclick="del_all()">delete</button>
//         <button onclick="edit(${i})">edit</button><span>${arr[i].dateTime}</span><br>
//         </li>`
//     }
// }
// function del_all(){
//     ul.innerHTML=""
// }
// function edit(e){
//     console.log(e,"<==id")
//     var update = prompt('ENTER YOUR TODO:') 
//     let old = arr[e].task
//     for( i = 0 ; i<arr.length ; i++){
//         let newli = document.getElementsByClassName('edit');
//         if (newli[i].firstChild.nodeValue==old){
//         newli[i].firstChild.nodeValue=update;
//        }
//     }
// }





let string = ""
var bttn = document.querySelectorAll('.bttn')
// var inp = document.getElementById('inp')
Array.from(bttn).forEach(bttn =>
    bttn.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector(' input').value = string
        } else if (e.target.innerHTML == "AC") {
            string = ""
            document.querySelector(' input').value = string
        } else {

            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector(' input').value = string
        }
    })
)

