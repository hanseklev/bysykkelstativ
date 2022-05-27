import { useEffect, useState } from "react";
import { BysykkelApi } from "./components/api";
import Table from "./components/table";

import "./App.css";

function App() {
  const [realTimeData, setRealTimeData] = useState();
  const [stationInfo, setStationInfo] = useState();

  async function getRealTimeStatus() {
    try {
      const { data } = await BysykkelApi.getStationStatus();
      setRealTimeData(data.data.stations);
    } catch (error) {
      console.log(error);
    }
  }

  async function getStationInfoData() {
    try {
      const { data } = await BysykkelApi.getStationInfo();
      setStationInfo(data.data.stations);
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    setRealTimeData(null);
    getRealTimeStatus();
  }

  useEffect(() => {
    getRealTimeStatus();
    getStationInfoData();
  }, []);

  return (
    <div className="container">
      <h1>Ledige stativ og bysykler</h1>
      <button onClick={handleClick}>Oppdater oversikt</button>
      {realTimeData ? (
        <Table data={realTimeData} info={stationInfo} />
      ) : (
        <p>Laster inn...</p>
      )}
    </div>
  );
}

export default App;
