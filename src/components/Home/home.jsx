import React from "react";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Premium Brand Laptops</h1>
          <p className="lead mt-3">
            Fast. Powerful. Reliable. Choose the best laptops for work, gaming, and creativity.
          </p>
          <a href="#products" className="btn btn-info text-dark fw-semibold px-4 mt-3">
            Explore Laptops
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Our Laptops?</h2>

          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm">
                <h4 className="fw-bold">High Performance</h4>
                <p className="mt-2">
                  Equipped with the latest processors, SSD storage, and powerful RAM.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm">
                <h4 className="fw-bold">Long Battery Life</h4>
                <p className="mt-2">
                  Work all day with advanced power-efficient technology.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm">
                <h4 className="fw-bold">Premium Build</h4>
                <p className="mt-2">
                  Sleek aluminum design with durable construction and modern styling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Latest Laptop Models</h2>

          <div className="row g-4">

            {/* Laptop Card 1 */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src="https://via.placeholder.com/400x250"
                  className="card-img-top"
                  alt="Laptop"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">XTech UltraBook Pro</h5>
                  <p className="card-text">
                    Lightweight, powerful, and perfect for everyday productivity.
                  </p>
                  <a href="#" className="btn btn-dark w-100">View Details</a>
                </div>
              </div>
            </div>

            {/* Laptop Card 2 */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src="https://via.placeholder.com/400x250"
                  className="card-img-top"
                  alt="Laptop"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">ProGaming Beast 15</h5>
                  <p className="card-text">
                    Dedicated graphics and high-speed performance for gamers.
                  </p>
                  <a href="#" className="btn btn-dark w-100">View Details</a>
                </div>
              </div>
            </div>

            {/* Laptop Card 3 */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src="https://via.placeholder.com/400x250"
                  className="card-img-top"
                  alt="Laptop"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Creator Studio X</h5>
                  <p className="card-text">
                    Perfect for video editing, design, and creative workloads.
                  </p>
                  <a href="#" className="btn btn-dark w-100">View Details</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">&copy; 2025 MyBrand Laptops. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;
