
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

 function updateCity(event){
    let cityTimeZone=event.target.value;
    if(cityTimeZone==="current"){
        cityTimeZone=moment.tz.guess();
    }
    let cityName=cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime=moment().tz(cityTimeZone);
    let cityElement=document.querySelector(".city-boxes");
    cityElement.innerHTML=` <div id="addis" class="boxies">
                        <div class="name-spot">
                          <h1>${cityName}</h1>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                    </div>
                    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
                </div>`;
 }


 let optionsSelector=document.querySelector("#options");
 optionsSelector.addEventListener("change",updateCity);