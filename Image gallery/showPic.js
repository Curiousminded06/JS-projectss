function showPic(whichpic) { 
    var source = whichpic.getAttribute("href"); 
    var placeholder = document.getElementById("placeholder"); 
    placeholder.setAttribute("src",source); 
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
   // alert(description.firstChild.nodeValue); 
    description.firstChild.nodeValue=text;
   } 
   onclick="showPic(this);return false";
//    var body_element = document.getElementsByTagName("body")[0];
//    console.log(body_element.childNodes);
//    function countBodyChildren() { 
//     var body_element = document.getElementsByTagName("body")[0]; 
//     alert (body_element.childNodes.length); 
//     alert(body_element.nodeType); 
//    }
//    window.onload = countBodyChildren;