import React from 'react'
import Data from './Apidata'
import Cards from './Cards'

const Services = () => {
  return (
 <>
   {/* Meet Our Team Section */}
   <h1 className="text-center text info">Our Services</h1>
          <div className="container">
        <div className="row">
          {Data.map((values) => (
            <Cards title={values.title} image={values.images} />
          ))}
        </div>
      </div>
 </>
  )
}

export default Services
