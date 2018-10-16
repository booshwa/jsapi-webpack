import MapView from "esri/views/MapView";
import React from "react";

export class MapComponent extends React.Component {

  componentDidMount() {
    const view = new MapView({
      container: this.mapDiv,
      map: this.props.map
    });
    this.props.onload(view);
  }
   
  render() {
    return (
      <div className="webmap"
        ref={ element => this.mapDiv = element }>
      </div>
    );
  }
}
