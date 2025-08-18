
function updateTime(){
let addisAbebaElement=document.querySelector("#addis");
let addisDateElement=addisAbebaElement.querySelector(".date");
let addisTimeElement=addisAbebaElement.querySelector(".time");
let addisTime=moment();

addisDateElement.innerHTML=addisTime.format("MMMM Do YYYY");
 addisTimeElement.innerHTML=`${addisTime.format("h:mm:ss")} <small> ${addisTime.format("A")} </small>`;
}
updateTime();
setInterval(updateTime,1000);
 

