import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-info">Contact Us</h1>
      <div className="container">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="email"
            class="form-control mb-3"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Mobile Number</label>
          <input
            type="email"
            class="form-control mb-3"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control mb-3"
            placeholder="Enter Email Address"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control mb-3"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mb-3">Submit FeedBack</button>
      </div>
    </div>
  );
};

export default Contact;
