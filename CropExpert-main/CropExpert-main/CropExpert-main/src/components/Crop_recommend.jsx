import React, { useState } from "react";
import axios from "axios";
import './CropRecommend.css'; // Import your CSS fil

function Crop_recommend() {
  const [timeGap, setTimeGap] = useState("")
  const [data, setData] = useState({
      city: "",
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humidity: 0,
      sunrise: 0,
      sunset: 0,
      country: ""
  })
  const [form, setForm] = useState({
    phosphorous: "",
    ph: "",
    rainfall: "",
    potassium: "",
    humidity: "",
    temperature: "",
    nitrogen: "",
  });
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
  
    setForm({ ...form, temperature: data.temp ,humidity:data.humidity})
    console.log(form)
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/crop-recommendation", { // Updated URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const getData = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d8596b1261b43be39522177d29112a96`)
        .then((response) => {
            setData({
                desc: response.data.weather[0].main,
                icon: response.data.weather[0].icon,
                city: response.data.name,
                temp: response.data.main.temp,
                temp_max: response.data.main.temp_max,
                temp_min: response.data.main.temp_min,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset,
                country: response.data.sys.country,
                windSpeed: response.data.wind.speed
            })
            console.log(response.data);
        })
        .catch((error) => {
            // Handle error
            console.error(error);
        });
}
  const handleOnChange = (e) => {
    clearTimeout(timeGap)
    const timeout = setTimeout(() => {
        getData(e.target.value)

    }, 400)
    setTimeGap(timeout)
}


  return (
    <div class="crop-recommend-container">
      <h2>Crop Recommendation</h2>
      <form onSubmit={handleSubmit} class="input-form">
        {/* Add input fields for user inputs here */}
        {/* Example: */}
        <input
          type="text"
          placeholder="Nitrogen"
          value={form.nitrogen}
          onChange={(e) => setForm({ ...form, nitrogen: e.target.value })}
        /><br/>
        <input
          type="text"
          placeholder="Phosphorous"
          value={form.phosphorous}
          onChange={(e) => setForm({ ...form, phosphorous: e.target.value })}
        /><br/>
        <input
          type="text"
          placeholder="Potassium"
          value={form.potassium}
          onChange={(e) => setForm({ ...form, potassium: e.target.value })}
        /><br/>
        <input
          type="text"
          placeholder="ph"
          value={form.ph}
          onChange={(e) => setForm({ ...form, ph: e.target.value })}
        /><br/>
        <input
          type="text"
          placeholder="rainfall"
          value={form.rainfall}
          onChange={(e) => setForm({ ...form, rainfall: e.target.value })}
        /><br/>
        {/* Repeat for other input fields */}
        <button type="submit">Get Recommendation</button>
      </form>
      {prediction && <p>Predicted Crop: {prediction}</p>}
      <br/>
      <div className="weather-card">
              <div className="inputData">
                      <input
                          type="text"
                          className='inputField'
                          placeholder='Enter City Name'
                          onChange={handleOnChange}
                      />
                      
                        {/* <button className='btn' onClick={handleOnClick} type='submit'>Search</button> */}
              </div>  
              <div>
              <div className="city-info">
                    <h3><i className="fa-sharp fa-solid fa-location-dot"></i> {data.city}  {data.country}</h3>
                </div>
                <div className="weather-info">
                    <h2>{data.temp} °C</h2>
                </div>
                <div className="weather-info">
                    <h2>{data.humidity} %</h2>
                </div>
                </div>                  
      </div>
    </div>
  );
}

export default Crop_recommend;