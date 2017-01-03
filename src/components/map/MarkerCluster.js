import { LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import * as icons from './icons';
require('leaflet.markercluster');

class MarkerCluster extends LayerGroup {

  constructor(...args) {
    super(...args);
    this.cluster = L.markerClusterGroup({ showCoverageOnHover: false });
    this.props.map.addLayer(this.cluster);

    this.updateCluster = this.updateCluster.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Pull the office name out of the popup content (between span tags)
  handleClick(e) {
    const popup = e.target._popup._content;
    const regex = /<span>(.*?)<\/span>/g;
    const officeName = regex.exec(popup)[1];
    this.props.selectOffice(officeName);
  }

  updateCluster(nextProps) {
    const props = (nextProps) ? nextProps : this.props;
    const offices = props.filtered;
    const offset = (props.infowindowVisible) ? [400, 0] : [0, 0];
    if (offices.length === 0) return;
    offices.forEach(office => {
      const position = Array.from(office.geometry.coordinates).reverse();
      const icon = icons.getIcon(office.properties.type).icon;
      const marker = L.marker(position, {icon: icon})
        .bindPopup(`<span>${office.properties.name}</span>`)
        .on('click', this.handleClick);
      this.cluster.addLayer( marker );
    });
    this.props.map.flyToBounds(this.cluster.getBounds(), { paddingTopLeft: offset });
  }

  componentWillMount() {
    super.componentWillMount();
    this.updateCluster();
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps();
    this.cluster.clearLayers();
    this.updateCluster(nextProps);
  }
}

export default MarkerCluster;
