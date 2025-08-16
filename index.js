let addisAbebaElement=document.querySelector("#addis");
let addisSpost=addisAbebaElement.querySelector(".name-spot")
let addisDateElement=addisAbebaElement.querySelector(".date");
let addisTimeElement=addisAbebaElement.querySelector(".time");
let addisTime=moment();
 
addisDateElement.innerHTML=addisTime.format("MMMM Do YYYY");
 addisTimeElement.innerHTML=`${addisTime.format("h:mm:ss")} <small>${addisTime}`

