message = document.getElementById('mSec')
document.getElementById('sendbtn').addEventListener('click',()=>{
    // console.log(document.getElementById('inpBox').value)
    // alert(document.getElementById('inpBox').value)
    
    let data = document.getElementById('inpBox').value;
    let para = document.createElement("p")
    let style = document.createAttribute('style');
    para.appendChild(document.createTextNode(data))
    style.value = "float:left;color:white;word-wrap: break-word;";
    para.setAttributeNode(style)
    para.classList.add('blue-box')
    
    message.appendChild(para)
})
