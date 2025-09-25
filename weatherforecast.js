import React,{useState}form'react';
function WeatherForecast(){
const[forecast,setForecast]=useState(null);
const[loading,setLoading]=useState(false);
const fetchWeather=()=>{
setLoading(true);
setTimeout()=>{
setForecast({city:"New York",temp:"72F",condition:"Sunny",icon:"imageupload"});
setloading(false);
},1000);
};
return(
<div style={{
minHeight:'100vh',
display:'grid',
placeItems:'center',
background:'linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5ab)',
backgroundSize:'400%400%',
animation:'gradient 15 esase infinite',
color:'white',
textAlign:'center'
}}>
<div>
<h1>Weather Forecast</h1>
<button onClick={fetchWeather}disabled={loading}style={{
padding:'12px 24px',
background:'rgba9255,255,255,0.2',
color:'white',
borderRadius:'30px',
margin:'20px 0'
}}>
{loading?'Loading...':'Get Weather'}
</button>
{forecast &&(
<div style={{
background:'rgba(255,255,255,0.15)',
padding:'20px',
borderRadius:'15px'
}}>
<h2>{forecast.city}<h2>
<div style={{fontSize:'3rem'}}>{forecast.icon}</div>
<p style={{fontSize:'1.5rem'}}>{forecast.temp}</p>
<p>{forecast.condition}</p>
</div>
)}
</div>
<style>{`@keyframes gradient{0%,100%{background-position:0%50%}50%
{background-position:100%50%}}`}</style>
</div>
);
}
export default WeatherForecast;