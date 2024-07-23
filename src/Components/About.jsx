import React from "react";
import Data from "./Apidata";
import Cards from "./Cards";


const About = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4 d-flex align-items-center">
          <div className="col-xs-12 col-md-6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              id adipisci quisquam. Dolorum rem culpa deserunt, nesciunt
              necessitatibus magnam. Quasi sunt impedit, alias labore
              repellendus enim quidem tenetur odit suscipit.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              est libero id beatae, ratione voluptate voluptatibus ea quae sint
              et aliquam, dolore, sed ab quasi. Quis nesciunt consequatur
              mollitia magni.
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src="../images/emergingtech.jpg"></img>
          </div>
          {/* Meet Our Team Section */}
          <h1 className="text-center text info">Meet Our Team</h1>
          <div className="container">
        <div className="row">
          {Data.map((values) => (
            <Cards title={values.title} image={values.images} />
          ))}
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default About;
