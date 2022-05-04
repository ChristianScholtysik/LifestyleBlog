import React from "react";
import { Map, Marker } from "pigeon-maps";

const About = (posts) => {
  // const location = posts.fields.location;
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <Map
          height={500}
          width={600}
          defaultCenter={[52.457119, 13.54023]}
          defaultZoom={8}
        >
          <Marker width={50} anchor={[52.457119, 13.54023]} />
        </Map>
      </div>
    </div>
  );
};

export default About;