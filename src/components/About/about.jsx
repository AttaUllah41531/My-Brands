import React from "react";

function About() {
  return (
    <div className="container py-5">
      {/* Page Header */}
      <h2 className="text-center fw-bold mb-5">About Us</h2>

      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1720556405438-d67f0f9ecd44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlbGwlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
            alt="About Us"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Who We Are</h3>
          <p className="mb-3">
            We are a leading team providing high-quality laptops and technology services.
            Our goal is to meet customer needs in the best way possible and make their lives easier.
          </p>
          <p className="mb-3">
            We specialize in many brands, such as Dell, HP, and more, and our commitment to technology allows us to deliver the best solutions.
          </p>
          <p>
            Our team is always motivated by innovation and growth to provide you with the best experience.
          </p>
        </div>
      </div>

      {/* Mission / Vision / Values Section */}
      <div className="row mt-5 text-center">
        {/* Mission */}
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded shadow-sm h-100">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/rocket.png"
              alt="Mission"
              className="mb-3"
              style={{ width: "60px" }}
            />
            <h4 className="fw-bold mb-3">Our Mission</h4>
            <p>
              To provide high-quality technology products that improve customers' lives.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded shadow-sm h-100">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/eye.png"
              alt="Vision"
              className="mb-3"
              style={{ width: "60px" }}
            />
            <h4 className="fw-bold mb-3">Our Vision</h4>
            <p>
              To build a trusted and innovative company in the world of technology that benefits society.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded shadow-sm h-100">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/handshake.png"
              alt="Values"
              className="mb-3"
              style={{ width: "60px" }}
            />
            <h4 className="fw-bold mb-3">Our Values</h4>
            <p>
              Integrity, quality, innovation, and customer satisfaction are our top priorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
