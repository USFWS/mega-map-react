import React from 'react';
import LeafletMap from './Map';
import Search from '../autocomplete/Search';
import ResultsBrief from '../autocomplete/ResultsBrief';
import Infowindow from '../infowindow';
import Sidecar from '../sidecar/Sidecar';

class MapView extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      findingNearest: false
    };

    this.updateNearest = this.updateNearest.bind(this);
  }

  updateNearest(state) {
    this.setState({ findingNearest: state });
  }

  render () {
    return (
      <div className="map-view">
        <div className='autocomplete'>
          <Search search={this.props.search}
            changeFocus={this.props.changeFocus}
            randomOffice={this.props.randomOffice.properties.name}
            query={this.props.query}
          />
          <ResultsBrief filtered={this.props.filtered}
            selectOffice={this.props.selectOffice}
            showBriefResults={this.props.showBriefResults}
            changeFocus={this.props.changeFocus}
          />
        </div>
        <Sidecar zoomToFullExtent={this.props.clearQuery}
          updateNearest={this.updateNearest}
          findingNearest={this.state.findingNearest}
        />
        <Infowindow office={this.props.currentOffice}
          infowindowVisible={this.props.infowindowVisible}
          toggleInfowindow={this.props.toggleInfowindow} />
        <div className='leaflet-map'>
          <LeafletMap filtered={this.props.filtered}
            currentOffice={this.props.currentOffice}
            selectOffice={this.props.selectOffice}
            infowindowVisible={this.props.infowindowVisible}
            findingNearest={this.state.findingNearest}
            updateNearest={this.updateNearest}
            filterOffices={this.props.filterOffices}
          />
        </div>
      </div>
    );
  }
}

export default MapView;
