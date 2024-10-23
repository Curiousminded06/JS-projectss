const container=document.querySelector('.container');

const URL="https://dog.ceo/api/breeds/image/random";

function loadImages(numImages = 10){
    let i=0;
     while(i < numImages){
     fetch('https://dog.ceo/api/breeds/image/random')
     .then(response=>response.json())
     .then(data=>{
     //console.log(data.message)
     const img =  document.createElement('img');
     img.src = `${data.message}`
     container.appendChild(img)
     })
     i++;
     }   
     }
 
 loadImages();

//scroll effect
window.addEventListener('scroll',()=>{
console.log("scrolledd",window.scrollY);//depending on my scroll speed
console.log(window.innerHeight);//same
if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight){
    loadImages();
}

})