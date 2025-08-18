
function updateTime(){
let addisAbebaElement=document.querySelector("#addis");
let addisDateElement=addisAbebaElement.querySelector(".date");
let addisTimeElement=addisAbebaElement.querySelector(".time");
let addisTime=moment().tz("africa/addis_abeba");

addisDateElement.innerHTML=addisTime.format("MMMM Do YYYY");
 addisTimeElement.innerHTML=`${addisTime.format("h:mm:ss")} <small> ${addisTime.format("A")} </small>`;


}
updateTime();
setInterval(updateTime,1000);


 function updateParisTime(){
 let parisElement=document.querySelector("#paris");
 let parisDateElement=parisElement.querySelector(".date");
 let parisTimeElement=parisElement.querySelector(".time");
 let parisTime=moment().tz("europe/paris");

  parisDateElement.innerHTML=parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML=`${parisTime.format("h:mm:ss")} <small> ${parisTime.format("A")} </small>`;
 }
 updateParisTime();
 setInterval(updateParisTime,1000);

 