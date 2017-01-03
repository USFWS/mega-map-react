import React from 'react';
import leafletKnn from 'leaflet-knn';
import L from 'leaflet';
import { Map, ZoomControl, TileLayer, LayersControl } from 'react-leaflet';
import MarkerCluster from './MarkerCluster';

class LeafletMap extends React.Component {
  constructor() {
    super();
    this.handleLocationFound = this.handleLocationFound.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.findingNearest) this.refs.map.leafletElement.locate();
  }

  handleLocationFound(e) {
    const geojson = L.geoJSON(this.props.filtered);
    const nearest = leafletKnn(geojson).nearest(e.latlng, 10);
    this.props.updateNearest(false);
    this.props.filterOffices(nearest.map(office => office.layer.feature));
  }

  render () {
    return (
      <Map center={[34.917575, -85.376183]} zoom={5} useFlyTo={true} zoomControl={false}
        maxZoom={14} onLocationfound={this.handleLocationFound} ref="map">
        <ZoomControl position='bottomright' />
        <LayersControl position='topright'>
          <LayersControl.BaseLayer name='National Geographic' checked={true}>
            <TileLayer
              url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
              attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
      	      maxZoom={16}
              minZoom={0}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='Stamen Black/White'>
            <TileLayer
              url='http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'
              attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              subdomains='abcd'
      	      maxZoom={16}
              minZoom={0}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <MarkerCluster filtered={this.props.filtered}
          selectOffice={this.props.selectOffice}
          infowindowVisible={this.props.infowindowVisible}
        />
      </Map>
    );
  }
}

export default LeafletMap;
