import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
//import 
// { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
//  from 'react-icons/bs'
//  import 
//  { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
//  from 'recharts';
 import nitrogen from "../icons/nitrogen.gif"
 import phosphorus from "../icons/phosphorus.gif"
 import humidity from "../icons/humidity.gif"
 import hot from "../icons/hot.gif"
 import potassium from "../icons/kalium.gif"
 import wheat from "../icons/wheat.gif"
import sprinkle from "../icons/sprinkler.gif"
function Home() {
    const [sensordata, setSensorData] = useState(null);
  const [temperatureMessage, setTemperatureMessage] = useState("");
  const [humidityMessage, setHumidityMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/read-arduino');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const apiData = await response.text();
      console.log(apiData);
      setSensorData(apiData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set up an interval to refresh the component every 10 seconds
    const intervalId = setInterval(() => {
      fetchData();
      // You can also set any other state variables if needed
    }, 50000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  function callFunc() {
    toast.error('Sensor not working');
  }

  useEffect(() => {
    if (sensordata) {
      if (sensordata.substring(17, 22) === '","DH') {
        callFunc();
        setTemperatureMessage("Sensor not working");
      } else {
        setTemperatureMessage(sensordata.substring(17, 22));
      }

      if (sensordata.substring(37, 42) === 'ta!"]') {
        callFunc();
        setHumidityMessage("Sensor not working");
      } else {
        setHumidityMessage(sensordata.substring(37, 41));
      }
    }
  }, [sensordata]);


  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CROP NAME</h3>
                    <img src={wheat}/>
                </div>
                <h1>COFFEE</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>NITROGEN CONTENT</h3>
                    <img src={nitrogen}/>
                </div>
                <h1>300ppm</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>POTASSIUM CONTENT</h3>
                    <img src={potassium}/>
                </div>
                <h1>12ppm</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PHOSPOROUS CONTENT</h3>
                    <img src={phosphorus}/>
                </div>
                <h1>33ppm</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TEMPERATURE</h3>
                    <img src={hot}/>
                </div>
                <h1>{temperatureMessage} °C</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>HUMIDITY</h3>
                    <img src={humidity}/>
                </div>
                <h1>{humidityMessage}%</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>IRRIGATION SCHEDULING</h3>
                    <img src={sprinkle}/>
                </div>
                <ul>
                    <li>
                        Current Moisture : 21 Kpa
                    </li>
                    <li>
                        Critical moisture : 14 Kpa
                    </li>
                </ul>
            </div>
        </div>

        {/* <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer> */}
            
      {/* </div> */}
      <ToastContainer />
    </main>
  )
}

export default Home