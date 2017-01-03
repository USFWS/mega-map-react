import L from 'leaflet';
import blueGooseIcon from '../../images/blue-goose.svg';
import buildingIcon from '../../images/building.svg';
import fisheriesIcon from '../../images/fisheries.svg';
import Logo from '../icons/Logo';

export const blueGoose = {
  icon: L.icon({
    iconUrl: blueGooseIcon,
    iconSize: [70, 90],
    popupAnchor: [5, -17]
  }),
  alt: 'Official logo of the National Wildlife Refuge System',
  type: 'National Wildlife Refuge'
};

export const office = {
  icon: L.icon({
    iconUrl: buildingIcon,
    iconSize: [70, 50],
    popupAnchor: [0, -20]
  }),
  alt: 'Logo for the U.S. Fish and Wildlife Service Fisheries program'
};

export const fisheries = {
  icon: L.icon({
    iconUrl: fisheriesIcon,
    iconSize: [70, 50],
    popupAnchor: [7, -25]
  }),
  alt: 'Icon representing a field station',
  type: 'National Fish Hatchery'
};

export const usfws = {
  icon: L.icon({
    iconUrl: Logo,
    iconSize: [70, 50],
    popupAnchor: [7, -25]
  }),
  alt: 'Official logo of the U.S. Fish and Wildlife Service',
  type: 'USFWS'
};

const icons = [blueGoose, office, fisheries];

export const getIcon = (type) => {
  let icon = icons.find(icon => icon.type === type);
  return (icon) ? icon : office;
};
