import React from "react";
import { getStationName } from "./lib";

const Table = ({ data, info }) => {
  const Row = ({ data }) => {
    const { station_id, num_bikes_available, num_docks_available } = data;

    return (
      <tr>
        <td style={{ textAlign: "left" }}>
          {info ? getStationName(info, station_id) : station_id}
        </td>
        <td>{num_bikes_available}</td>
        <td>{num_docks_available}</td>
      </tr>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Stativnavn</th>
          <th>Ledige sykler</th>
          <th>Ledige låser</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((station, index) => <Row key={index} data={station} />)}
      </tbody>
    </table>
  );
};

export default Table;
