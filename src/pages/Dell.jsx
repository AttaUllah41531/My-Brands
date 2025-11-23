import React from "react";

function Dell() {
  // Realistic laptop images and data
  const laptops = [
    { id: 1, name: "Dell XPS 13", description: "High-performance ultrabook for work and creativity.", img: "https://plus.unsplash.com/premium_photo-1725867721409-009dd5630f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlbGwlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D" },
    { id: 2, name: "Dell Inspiron 15", description: "Reliable laptop for everyday use.", img: "https://images.unsplash.com/photo-1554246247-6993b606e8b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbGwlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D" },
    { id: 3, name: "Dell G15 Gaming", description: "Powerful gaming laptop with high-end graphics.", img: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbGwlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D" },
    { id: 4, name: "Dell Latitude 7420", description: "Business laptop with premium build and security features.", img: "https://media.istockphoto.com/id/1362775637/photo/modern-new-office-black-laptop-on-white-background-front-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=urYFOIsbqwPeXsyAHGjCytRlX-HCXzmsyqOQ1FhrehY=" },
    { id: 5, name: "Dell Vostro 3510", description: "Affordable laptop for small businesses.", img: "https://i.dell.com/is/image/DellContent//vostro-3510-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 6, name: "Dell Alienware m15", description: "High-end gaming laptop for serious gamers.", img: "https://i.dell.com/is/image/DellContent//alienware-m15-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 7, name: "Dell XPS 17", description: "Big screen ultrabook for creatives and professionals.", img: "https://i.dell.com/is/image/DellContent//xps-17-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 8, name: "Dell Inspiron 14", description: "Portable laptop for students and professionals.", img: "https://i.dell.com/is/image/DellContent//inspiron-14-5406-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 9, name: "Dell Precision 5560", description: "Workstation laptop for designers and engineers.", img: "https://i.dell.com/is/image/DellContent//precision-5560-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 10, name: "Dell G5 15 SE", description: "Affordable gaming laptop with AMD Ryzen.", img: "https://i.dell.com/is/image/DellContent//g5-15-se-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 11, name: "Dell Latitude 5520", description: "Business-class laptop with long battery life.", img: "https://i.dell.com/is/image/DellContent//latitude-5520-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 12, name: "Dell Vostro 5402", description: "Compact and powerful business laptop.", img: "https://i.dell.com/is/image/DellContent//vostro-5402-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 13, name: "Dell Inspiron 16 Plus", description: "Large screen laptop for work and entertainment.", img: "https://i.dell.com/is/image/DellContent//inspiron-16-plus-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 14, name: "Dell Alienware x17", description: "Ultimate gaming machine with powerful specs.", img: "https://i.dell.com/is/image/DellContent//alienware-x17-laptop-campaign-hero-504x350.psd?fmt=jpg" },
    { id: 15, name: "Dell XPS 15", description: "Professional laptop for creators and developers.", img: "https://i.dell.com/is/image/DellContent//xps-15-laptop-campaign-hero-504x350.psd?fmt=jpg" },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Dell Laptops</h2>

      <div className="row g-4">
        {laptops.map((laptop) => (
          <div key={laptop.id} className="col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={laptop.img}
                className="card-img-top"
                alt={laptop.name}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{laptop.name}</h5>
                <p className="card-text flex-grow-1">{laptop.description}</p>
                <a href="#" className="btn btn-info text-dark mt-3">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dell;
