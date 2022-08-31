import React, {useState,useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCloud, faCoffee } from '@fortawesome/free-solid-svg-icons'
  import {WiDayCloudyHigh  ,WiCloudy ,WiDayLightWind,WiDayCloudyGusts,WiDayLightning,WiDayThunderstorm} from "react-icons/wi";

function Wether() {

  const [city, setcity] = useState("delhi");
const [article, setarticle] = useState({});










const search=evt=>{
  if(evt.key==='Enter'){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d3ebca4d53dabaa28d5c7c162af741d`).then(res=>res.json())
    .then(result=>{
      setarticle(result);
      setcity('')
      console.log(result)
    
    });
    
  }
}
   
   

  return (
    <div className='row'>




  <div className="card col-md-2 mx-2 shadow-lg p-3 mb-5 bg-white rounded" style={{width: "20rem"}}>
  <marquee className="container">
<WiDayThunderstorm size='10rem ' color='red' />
<WiDayLightWind size='10rem' color='yellow' />
<WiDayCloudyGusts size='10rem' color='green'/>
<WiDayLightning size='10rem' color='blue'/>
<WiCloudy size='10rem' color='grey'/>
</marquee>
  
  <div className="mb-3 mx-2 my-3 "  style={{fontFamily:"Times New Roma",fontSize:"25px"}}>
    <label for="exampleInputEmail1" className="form-label">Enter the city name </label>
    <input type="text" className="form-control"  id="exampleInputEmail1" value={city} onChange={e=>setcity(e.target.value)}  onKeyPress={search} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Your forcast just one click far.</div>
  </div></div>

  <br />
  <br />


  {(typeof article.main!="undefined")?(
<div className="card col-md-2 mx-2 shadow-lg p-3 mb-5 bg-white rounded" style={{width: "20rem"}}>

  <div className="card-body " style={{fontFamily:"Times New Roma",fontSize:"25px"}}>
  
  <div className="conatiner mx-3 shadow-lg p-3 mb-5 bg-white rounded">
  <h3 className="card-title">City:---  {article.name}</h3>
  <hr/> 
  <h5 className="card-title">Max Temp:----  {article.main.temp_max}</h5> 
  <hr/>
  <h5 className="card-title">Min Temp:----  {article.main.temp_min}</h5> 
  <hr/>
    <h5 className="card-title">Pressure:-----    {article.main.pressure}</h5>
    <hr/>
   
    <h5 className="card-title">Humidity:-----    {article.main.humidity}</h5>
    <hr/>
    <h5 className="card-title">visibility:-----    {article.visibility}</h5>
   
  
    
  
    </div>
{(article.main.temp)<=300?<WiCloudy size='10rem' />:<WiDayCloudyHigh size='10rem' color='yellow'   />}
    
 
 
  </div>
</div>
):(<div className="card col-md-2 mx-2 shadow-lg p-3 mb-5 bg-white rounded" style={{width: "20rem"}}>
<img src="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" style={{height:"200px"}} className="card-img-top" alt="..."/>
<div className="card-body " style={{fontFamily:"Times New Roma",fontSize:"25px"}}>
<h5 className="card-title">City:---  </h5>
  
  <h5 className="card-title">Temp:-----    </h5>
  <h5 className="card-title">Pressure:-----    </h5>
  <h5 className="card-title">Humidity:-----     </h5>
 
 
</div>
</div>)}

</div>




 
  )
}

export default Wether