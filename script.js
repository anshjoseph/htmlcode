message = document.getElementById('mSec')
var cout = 0
document.getElementById('sendbtn').addEventListener('click',()=>{
    // console.log(document.getElementById('inpBox').value)
    // alert(document.getElementById('inpBox').value)
    let data = document.getElementById('inpBox').value;
    let para = document.createElement("p")
    let style = document.createAttribute('style');
    para.appendChild(document.createTextNode(data))
    
    
    if(cout%2 == 0) {
        para.classList.add('blue-box');
        style.value = "float:left;color:white;word-wrap: break-word;";
        para.setAttributeNode(style)
    }else{
        para.classList.add('red-box')
        style.value = "float:right;color:white;word-wrap: break-word;";
        para.setAttributeNode(style)
    }
    
    message.appendChild(para)
    cout++;
})
document.getElementById('btn').addEventListener('click',()=>{

})


