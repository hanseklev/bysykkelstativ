import axios from "axios";

const api = axios.create({
  baseURL: "https://gbfs.urbansharing.com/oslobysykkel.no/",
  headers: { "Client-Identifier": "Hans Erling Klevstad-bysykkelstativ" },
});

const getStationStatus = async () => api.get("/station_status.json");
const getStationInfo = async () => api.get("/station_information.json");

export const BysykkelApi = { getStationInfo, getStationStatus };
