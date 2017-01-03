import React from 'react';
import titleCase from 'title-case';

import Facebook from '../icons/Facebook';
import Twitter from '../icons/Twitter';
import Website from '../icons/Website';
import Youtube from '../icons/Youtube';
import Flickr from '../icons/Flickr';

const components = {
  website: Website,
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
  flickr: Flickr
};

const Links = (props) => {
  const possibleLinks = ['facebook', 'twitter', 'website', 'flickr', 'youtube'];
  const links = possibleLinks.filter(type => props.office[type]);
  return (
    <ul className='office-links'>
      {links.map((type, i) => {
        let Component = components[type];
        return (
          <li key={i}>
            <a href={props.office[type]}>
              <Component /><span>{titleCase(type)}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
