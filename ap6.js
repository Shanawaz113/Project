
document.getElementById("num").innerHTML="";
document.getElementById("in").innerHTML="";
document.getElementById("out").innerHTML="";
document.getElementById("if").innerHTML="";
document.getElementById("w_name").innerHTML="";

function submit(){
    var a=document.getElementById("input");
    console.log(a.value);

const api=`http://api.openweathermap.org/data/2.5/weather?q=${a.value}&&mode=json&units=metric&APPID=11ceb3ebfe09368f23214131db183901`;

window.fetch(api).then( 
    x=>{
        x.json().then(
     y=>{
            
          document.getElementById("num").innerHTML +=y.main.temp+"&#8451;";
          document.getElementById("in").innerHTML += y.main.temp_max;
          document.getElementById("out").innerHTML += y.main.temp_min;
          document.getElementById("w_name").innerHTML += y.name;
         var weather=y.weather;
        weather.forEach(element => {
            document.getElementById("if").innerHTML +=  element.description;
            document.getElementById("name").innerHTML +=`<img src="http://openweathermap.org/img/wn/${element.icon}.png">`;
        });

         console.log(temp);
         console.log(temp_max);
         console.log(temp_min);
         console.log(humidity);
         console.log(y);
        }
     ).catch(
         err=>console.log(err))
     
        }
          ).catch(
             err=>console.log(err))

          
          document.getElementById("num").innerHTML="";
document.getElementById("in").innerHTML="";
document.getElementById("out").innerHTML="";
document.getElementById("if").innerHTML="";
document.getElementById("w_name").innerHTML="";
document.getElementById("name").innerHTML="";


          }