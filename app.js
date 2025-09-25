

const button=document.querySelector('button');
button.addEventListener('click',()=>{


    function updatetemp(data){
        const msg=document.getElementById('weather-info')
        msg.innerText=`todays temperature at ${place} :${data.current.temp_c} and the  cloud is ${data.current.condition.text}`;
        
    }

    const place=document.getElementById('location').value;  //accessing the input
    const prom=fetch(`https://api.weatherapi.com/v1/current.json?key=cf50a00b1f884c35b5145513251609&q=${place}&aqi=no`);

   prom
   .then(responce=>responce.json())
   .then(data=>updatetemp(data))
})

