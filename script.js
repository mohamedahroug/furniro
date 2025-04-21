let sliderIndex=0;

function move(index){
  checkbottons()
  checkDots()
    sliderIndex=index;
    document.querySelector(".slider-imgs").style.transform=`translateX(${-sliderIndex*100}%)`

}
function next(){
  if(sliderIndex>=3) return;
    sliderIndex++;
    move(sliderIndex);
}
function prev(){
  if(sliderIndex<=0) return;
    sliderIndex--;
    move(sliderIndex);
}

let prevButton=document.getElementById("slider_prev");
let nextButton=document.getElementById("slider_next");

function checkbottons(){
  
  if(sliderIndex<=0){
    prevButton.classList.add("disabled" ,"d-none");
  }else{
    prevButton.classList.remove("disabled" ,"d-none");
  }
  
  if(sliderIndex>=3){
    nextButton.classList.add("disabled" ,"d-none");
  }else{
    nextButton.classList.remove("disabled" ,"d-none");
  }
}
checkbottons()

function checkDots(){

  document.querySelectorAll(".dots>span").forEach((span)=>{
    span.classList.remove("active");
  })
  document.querySelectorAll(".dots>span")[sliderIndex].classList.add("active");
}

prevButton.addEventListener("click",prev);
nextButton.addEventListener("click",next);

document.querySelectorAll(".dots span").forEach((span)=>{
    span.addEventListener("click",()=>{
        sliderIndex=Number(span.getAttribute("sliderIndex"));
        move(sliderIndex);

})
})