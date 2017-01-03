import React from 'react';
import * as API from '../api/OfficesAPI';
import Header from './header/Header';
import '../css/App.css';
import '../../node_modules/leaflet/dist/leaflet.css';
import '../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css';
import '../../node_modules/leaflet.markercluster/dist/MarkerCluster.css';

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      filtered: [],
      query: '',
      currentOffice: {},
      showBriefResults: false,
      randomOffice: API.randomOffice(),
      infowindowVisible: false
    };

    this.selectOffice = this.selectOffice.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
    this.search = this.search.bind(this);
    this.toggleInfowindow = this.toggleInfowindow.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
    this.filterOffices = this.filterOffices.bind(this);
  }

  toggleInfowindow() {
    this.setState({ infowindowVisible: !this.state.infowindowVisible });
  }

  search(e) {
    this.setState({
      query: e.target.value,
      filtered: API.filterOffices(e.target.value)
    });
  }

  changeFocus(e) {
    // If we don't have a timeout the activeElement is always the document.body
    // after a focus/blur event
    setTimeout(() => {
      const el = document.activeElement;
      const isInput = el.classList.contains('search-input');
      const isButton = el.classList.contains('office-button');
      if (isButton || isInput) this.setState({ showBriefResults: true });
      else this.setState({ showBriefResults: false });
    }, 5);
  }

  clearQuery() {
    this.setState({ query: '', filtered: API.filterOffices() });
  }

  selectOffice(name) {
    const office = API.getOffice(name);
    const filtered = API.filterOffices(name);
    if (office) this.setState({ currentOffice: office, query: name, filtered });
    else throw new Error('Could not find the selected office.');
    if (!this.state.infowindowVisible) this.toggleInfowindow();
  }

  filterOffices(offices) {
    this.setState({ filtered: offices });
  }

  // Pull in the offices data when the App starts using a mock API based on a JSON file
  componentDidMount() {
    this.setState({ 'filtered': API.getOffices() });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        search: this.search,
        query: this.state.query,
        filtered: this.state.filtered,
        currentOffice: this.state.currentOffice,
        randomOffice: this.state.randomOffice,
        selectOffice: this.selectOffice,
        showBriefResults: this.state.showBriefResults,
        changeFocus: this.changeFocus,
        infowindowVisible: this.state.infowindowVisible,
        toggleInfowindow: this.toggleInfowindow,
        clearQuery: this.clearQuery,
        filterOffices: this.filterOffices
       });
    });

    return (
      <div>
        <Header/>
        <section className="content">
          {childrenWithProps}
        </section>
      </div>
    );
  }
}

export default App;
