import geojson from './offices.json';

const offices = geojson.features;

const random = (array) => array[Math.floor(Math.random() * array.length)];

export const getOffices = () => offices;

export const getOffice = (name) => offices.find(office => name === office.properties.name);

export const randomOffice = () => random(offices);

// Search offices by name, narrative, city, state, and type
export const filterOffices = (query) => {
  const regex = new RegExp(query, 'gi');

  let filtered = offices.filter(office => {
    const props = office.properties;
    const isName = regex.test(props.name);
    const isType = regex.test(props.type);
    const isCity = regex.test(props.city);
    const isState = regex.test(props.state);
    return ( isName || isType || isCity || isState );
  });
  return (filtered === []) ? offices : filtered;
}
