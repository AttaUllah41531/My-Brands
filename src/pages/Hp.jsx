import React from "react";

function Hp() {
  // Data for 15 HP laptops
  const laptops = [
    { id: 1, name: "HP Spectre x360", description: "Premium 2-in-1 laptop for work and creativity.", img: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SFAlMjBTcGVjdHJlJTIweDM2MHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, name: "HP Envy 13", description: "Slim, stylish, and powerful ultrabook.", img: "https://store.hp.com/app/assets/images/uploads/prod/hp-envy-13-laptop-complete-review-hero1552846035534.png" },
    { id: 3, name: "HP Pavilion 15", description: "Reliable laptop for everyday use.", img: "https://laptopmedia.com/wp-content/uploads/2019/09/6-18-e1586524995885.jpg" },
    { id: 4, name: "HP Omen 15", description: "High-performance gaming laptop with powerful graphics.", img: "https://static.beebom.com/wp-content/uploads/2018/08/hp-omen-review-featured.jpg?w=750&quality=75" },
    { id: 5, name: "HP EliteBook 840", description: "Business-class laptop with robust security features.", img: "https://laptoplelo.com/wp-content/uploads/2020/02/1e0fa00b5d84b70b1c9875f1ac92cf82.jpg" },
    { id: 6, name: "HP ZBook Studio", description: "Mobile workstation for designers and professionals.", img: "https://kaas.hpcloud.hp.com/PROD/v2/renderbinary/4225460/4227067/com-ws-p-hp-zbook-studio-g8-mobile-specifications/com-ws-p-hp-zbook-studio-g8-mobile-image" },
    { id: 7, name: "HP Spectre x360 14", description: "Convertible laptop for portability and power.", img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06599987.png" },
    { id: 8, name: "HP ProBook 450", description: "Affordable business laptop with durability.", img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06598765.png" },
    { id: 9, name: "HP Chromebook x360", description: "Lightweight Chromebook for productivity and learning.", img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06599887.png" },
    { id: 10, name: "HP Victus 16", description: "Gaming laptop with excellent performance at a reasonable price.", img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06599012.png" },
    { id: 11, name: "HP Elite Dragonfly", description: "Ultra-light business laptop for mobility.", img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06598799.png" },
    { id: 12, name: "HP Spectre Folio", description: "Leather-clad convertible for premium feel.", img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06599812.png" }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">HP Laptops</h2>

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

export default Hp;
