/**
 * Retrieves name from array with station metadata
 * @param {array} stationsInfo
 * @param {string} stationId
 * @returns {string}
 */
export function getStationName(stationsInfo, stationId) {
  const { name } = stationsInfo.find((s) => s.station_id === stationId);

  return name;
}
