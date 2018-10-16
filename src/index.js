import "@dojo/shim/Promise";
import "./config";

import Map from "esri/Map";
import { Tab, Sidebar, Menu } from 'semantic-ui-react'

import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./app/components/header";
import { MapComponent } from "./app/components/map";

import "./css/main.scss";

class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          sidebar_open: true
      };
  }

  onComponentLoad(view) {
    console.log(view);
  }

  componentWillMount() {
    this.map = new Map({
      basemap: "streets",
      zoom: 10,
      center: [40.61, -95.95]
    });

    this.panes = [
      { menuItem: 'Tab 1', render: () => <Tab.Pane >Tab 1 Content</Tab.Pane> },
      { menuItem: 'Tab 2', render: () => <Tab.Pane >Tab 2 Content</Tab.Pane> },
      { menuItem: 'Tab 3', render: () => <Tab.Pane >Tab 3 Content</Tab.Pane> },
    ]
  }
  
  render() {
    return (
      <div className="main">
        <Header 
          fixed="top"
          title="ArcGIS Webpack Plugin"
          search={true}
        />

        <Sidebar.Pushable as={"div"} >

          <Sidebar
            id="main_sidebar"
            visible={this.state.sidebar_open}
            as={Menu}
            direction="right"
            animation="push"
            width="wide"
            icon="labeled"
            vertical
          >
           
           <Tab panes={this.panes} />

          </Sidebar>

          <Sidebar.Pusher className="sidebar_open" >

            <MapComponent
                map={this.map}
                onload={this.onComponentLoad}
            />

          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
