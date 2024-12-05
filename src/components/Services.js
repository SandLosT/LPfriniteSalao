import React from "react";
import styles from "../assets/styles/Services.module.css"; // Import CSS Module

const Services = () => {
  const services = [
    { title: "Corte de Cabelo", image: "/assets/images/corte.jpg" },
    { title: "Manicure e Pedicure", image: "/assets/images/unhas.jpg" },
    { title: "Tratamentos Faciais", image: "/assets/images/pele.jpg" },
    { title: "Coloração Capilar", image: "/assets/images/coloracao.jpg" },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <h2>Nossos Serviços</h2>
        <div className={styles.gridContainer}>
          {services.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.serviceImage}
              />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
