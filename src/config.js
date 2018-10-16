import esriConfig from "esri/config";

const DEFAULT_WORKER_URL = "https://js.arcgis.com/4.9/";
const DEFAULT_LOADER_URL = `${DEFAULT_WORKER_URL}dojo/dojo-lite.js`;

esriConfig.workers.loaderUrl = DEFAULT_LOADER_URL;
esriConfig.workers.loaderConfig = {
  baseUrl: `${DEFAULT_WORKER_URL}dojo`,
  packages: [
    { name: "esri", location: DEFAULT_WORKER_URL + "esri" },
    { name: "dojo", location: DEFAULT_WORKER_URL + "dojo" },
    { name: "dojox", location: DEFAULT_WORKER_URL + "dojox" },
    { name: "dijit", location: DEFAULT_WORKER_URL + "dijit" },
    { name: "dstore", location: DEFAULT_WORKER_URL + "dstore" },
    { name: "moment", location: DEFAULT_WORKER_URL + "moment" },
    { name: "@dojo", location: DEFAULT_WORKER_URL + "@dojo" },
    {
      name: "cldrjs",
      location: DEFAULT_WORKER_URL + "cldrjs",
      main: "dist/js/cldr"
    },
    {
      name: "globalize",
      location: DEFAULT_WORKER_URL + "globalize",
      main: "dist/js/globalize"
    },
    {
      name: "maquette",
      location: DEFAULT_WORKER_URL + "maquette",
      main: "dist/js/maquette.umd"
    },
    {
      name: "maquette-css-transitions",
      location: DEFAULT_WORKER_URL + "maquette-css-transitions",
      main: "dist/js/maquette-css-transitions.umd"
    },
    {
      name: "maquette-jsx",
      location: DEFAULT_WORKER_URL + "maquette-jsx",
      main: "dist/js/maquette-jsx.umd"
    },
    { name: "tslib", location: DEFAULT_WORKER_URL + "tslib", main: "js/tslib" }
  ]
};
