var list =document.getElementById("list");
function addItem(){
    var todo_item=document.getElementById("todo_item");
    var liText=document.createTextNode(todo_item.value);
    var li=document.createElement("li");
    li.setAttribute("class","lis")
    li.appendChild(liText);

    // edit btn
    var edtBtn=document.createElement("img");
    // var edtText=document.createTextNode("Edittem") I;
    edtBtn.setAttribute("onclick","edtItem(this)")
    edtBtn.setAttribute("src","ed.png")
    edtBtn.setAttribute("class","edit")
    // edtBtn.appendChild(edtText);
    li.appendChild(edtBtn)

   
    // dlt btn
    var dltBtn=document.createElement("img");
    // var dltText=document.createTextNode("Delete Item");
    dltBtn.setAttribute("onclick","dltItem(this)")
    dltBtn.setAttribute("class","dlt")
    dltBtn.setAttribute("src","download.png")
    // dltBtn.appendChild(dltText);
    li.appendChild(dltBtn)


    todo_item.value="";
    list.appendChild(li)
}
function dltallItem(){
    list.innerHTML="";
}
function edtItem(j){
    var val=prompt("Enter Edit Item",j.parentNode.firstChild.nodeValue);
    j.parentNode.firstChild.nodeValue=val;
}
function dltItem(a){
    a.parentNode.remove()
}
