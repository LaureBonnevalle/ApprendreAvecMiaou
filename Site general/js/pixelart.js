window.onload=function(){
  let stop = false;
  let wrap = document.getElementById("wrap")
  let arrData = document.querySelectorAll(".cell");
  let color = document.getElementById("clr");
  let clear = document.getElementById("clear");
  let label=document.querySelector("label");
  let sizeAll = document.querySelectorAll(".select__item");
    label.style.background=color.value;
    color.addEventListener("input", function (){
            
    label.style.background=color.value;
       
    });
 
clear.addEventListener("click", function(){
  arrData = document.querySelectorAll(".cell");

      arrData.forEach(item => {
item.style.backgroundColor = "white";
})
  });
 
 
// let arr= [null,null,null,null,null,null,null,null,null]
  
  addEventListener('click',function(event){
        if(event.target.className === "cell") {
            event.target.style.backgroundColor = color.value;
           
        }      
       
    }); 
   
   
   let select = function(){
        let selectHeader = document.querySelectorAll(".select__header");
        let selectItem = document.querySelectorAll(".select__item");
       
        selectHeader.forEach(item=>{
            item.addEventListener("click",
                selectToggle)
        });
       
      selectItem.forEach(item=>{
            item.addEventListener("click", selectChoose)
        });
         
       
      function selectToggle(){
          this.parentElement.classList.toggle("is-active");
      }
       
      function selectChoose(){
          let text = this.innerText;
          let select = this.closest(".select");
         
         let currentText = select.querySelector(".select__current");
          currentText.innerText = text;
         
          select.classList.remove("is-active");
         
      }
       
       
       
    }
   
    select(); 
let innerRow =  `<div class="cell" data-num="0"></div>
            <div class="cell" data-num="1"></div>
            <div class="cell" data-num="2"></div>
           
            <div class="cell" data-num="3"></div>
            <div class="cell" data-num="4"></div>
            <div class="cell" data-num="5"></div>
           
            <div class="cell" data-num="6"></div>
            <div class="cell" data-num="7"></div>
            <div class="cell" data-num="8"></div>
           
            <div class="cell" data-num="0"></div>
           
            <br>`;

//---------------------

let innerEl = function(el, className,w){
            
        for(let i=0; i<el; i++){
        let div = document.createElement("div");
        div.classList.add("cell")
        div.classList.add(className);
        div.style.width=w + "px";
        div.style.height=w + "px";
            wrap.appendChild(div)
        };
    }
   
   


//----------------------              
    sizeAll.forEach(item => {
   item.addEventListener("click", function(event){
  
  if(event.target.dataset.size === "10"){
       wrap.innerHTML="";
       wrap.style.width=500+"px"
      innerEl(100, "cell",29)
      
      
        /*   for(let i = 0; i < 10; i++){
       
       wrap.innerHTML += innerRow;
   let arrCell = document.querySelectorAll(".cell");   
       arrCell.forEach(item => {
      
item.style.width="29px";
item.style.height="29px";



});             
      
           }*/
       };
      
    if(event.target.dataset.size === "15"){
    wrap.style.width=495+"px"
       wrap.innerHTML="";
       innerEl(225, "cell",33)
                    
       };  
      
   if(event.target.dataset.size === "25"){
   wrap.style.width=506+"px"
       wrap.innerHTML="";
       innerEl(484, "cell",23)
                    
                    
                    
       };      
      
     
   });





});



   
}

