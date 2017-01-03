import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <h1>About this Map</h1>

      <p>The data that feeds this application lives on <a href='https://github.com/USFWS/mega-map-react/blob/master/src/api/offices.json' target="_blank">GitHub</a>.  If you think you have found a mistake in the data or have a suggestion to improve this application please report it:</p>

      <ol>
        <li><a href='https://github.com/USFWS/mega-map-react/issues' target="_blank">By filing an Issue on GitHub</a></li>
        <li><a href='mailto:roy_hewitt@fws.gov?subject=Offices%20Mapper%20Issue'>By emailing the webmaster</a></li>
      </ol>

      <h2>Icons</h2>

      <p>This project uses several icons from <a href='https://thenounproject.com/about/' target="_blank">The Noun Project</a>.</p>

      <ul>
        <li><a href='https://thenounproject.com/search/?q=github&i=368567'>Fork by Nick Bluth from the Noun Project</a></li>
        <li><a href='https://thenounproject.com/search/?q=email&i=676342'>Email by Gregor Črešnar from the Noun Project</a></li>
        <li><a href='https://thenounproject.com/search/?q=geolocate&i=154634'>Crosshair by Sergey Patutin from the Noun Project</a></li>
        <li><a href='https://thenounproject.com/search/?q=earth&i=592007'>Earth America by Hea Poh Lin from the Noun Project</a></li>
        <li><a href='https://thenounproject.com/search/?q=facebook+logo&i=20845'>Facebook by Luboš Volkov from the Noun Project</a></li>
        <li><a href='https://thenounproject.com/search/?q=youtube+logo&i=641789'>Play by Souvik Maity from the Noun Project</a></li>
        <li><a href='https://thenounproject.com/search/?q=zoom+out&i=147199'>Zoom by mikael bonnevie from the Noun Project</a></li>
      </ul>
    </div>
  );
}

export default About;
