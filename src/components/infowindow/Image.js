import React from 'react';
import purify from 'dompurify';

const Image = (props) => {

  function createMarkup(caption) {
    return {__html: purify.sanitize(caption)};
  }

  const jpg = (props.src) ? require(`../../images/${props.src}`) : '';
  const markup = (jpg !== '') ?
    <figure>
      <img src={jpg} alt={props.alt}/>
      <figcaption dangerouslySetInnerHTML={createMarkup(props.caption)}></figcaption>
    </figure> : <span></span>;

  return markup;
}

export default Image;
