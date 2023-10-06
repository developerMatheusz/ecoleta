/* eslint-disable @typescript-eslint/no-unused-vars */
import L from "leaflet";
import "leaflet.zoomhome";

export async function getSetupLeaflet() {
  const geoServer = "http://localhost:8080/geoserver/urbangeosig/wms";

  const registerSetor = L.tileLayer.wms(geoServer, {
    layers: "urbangeosig:register_setor",
    format: "image/png",
    transparent: true,
    version: "1.1.0",
    maxZoom: 20,
    zIndex: 1,
    attribution: "Prefeitura Municipal de Cassilândia"
  });

  const registerQuadra = L.tileLayer.wms(geoServer, {
    layers: "urbangeosig:register_quadra",
    format: "image/png",
    transparent: true,
    version: "1.1.0",
    maxZoom: 20,
    zIndex: 1,
    attribution: "Prefeitura Municipal de Cassilândia"
  });

  const registerLote = L.tileLayer.wms(geoServer, {
    layers: "urbangeosig:register_lote",
    format: "image/png",
    transparent: true,
    version: "1.1.0",
    maxZoom: 20,
    zIndex: 1,
    attribution: "Prefeitura Municipal de Cassilândia"
  });

  const googleStreets = L.tileLayer(
    "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: "Google Maps"
    }
  );

  const googleSat = L.tileLayer(
    "https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: "Google Maps"
    }
  );

  const googleTerrain = L.tileLayer(
    "https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: "Google Maps"
    }
  );

  const map = L.map("map", {
    center: [-19.1126910811961, -51.73431873321534],
    zoom: 15,
    zoomControl: false,
    layers: [googleSat, registerLote, registerQuadra, registerSetor]
  });

  const zoomHome = L.Control.zoomHome();
  zoomHome.addTo(map);
}
