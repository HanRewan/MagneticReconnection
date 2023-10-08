import React, { useState, useEffect } from 'react';

function SolarWindData() {
  const [solarWindSpeed, setSolarWindSpeed] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch solar wind data from the SWPC JSON API
    const fetchSolarWindData = async () => {
      try {
        const response = await fetch('https://services.swpc.noaa.gov/json/dscovr/dscovr_mag_1s.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Extract the solar wind speed value for 'bx_gse'
        const newSolarWindSpeed = data[4]["time_tag"];
        setSolarWindSpeed(newSolarWindSpeed + ' km/s');
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    // Fetch data initially when the component mounts
    fetchSolarWindData();

    // Set up a setInterval to fetch data every minute (60000 milliseconds)
    const intervalId = setInterval(fetchSolarWindData, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Solar Wind Speed (bx_gse)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{solarWindSpeed}</p>
      )}
    </div>
  );
}

export default SolarWindData;


