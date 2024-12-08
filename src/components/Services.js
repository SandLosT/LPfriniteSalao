import React, { useEffect } from "react";
import styles from "../styles/Services.module.css"; // Import CSS Module
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import AOS from 'aos'; // Importa o JavaScript do AOS

const Services = () => {
  const services = [
    { title: "Corte de Cabelo", description: "Transforme seu visual com cortes modernos e personalizados.", image: "/assets/images/IMG-CORTE.jpg" },
    { title: "Manicure e Pedicure", description: "Cuide das suas unhas com tratamentos impecáveis.", image: "/assets/images/IMG-MANI.jpg" },
    { title: "Tratamentos Faciais", description: "Rejuvenesça sua pele com nossos tratamentos exclusivos.", image: "/assets/images/face.jpg" },
    { title: "Coloração Capilar", description: "Experimente novas cores com técnicas avançadas.", image: "/assets/images/cabelo.jpg" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação
      once: false, // A animação não vai acontecer apenas uma vez
    });
  }, []);

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div
              className={`${styles.serviceCard} ${index % 2 === 0 ? styles.leftAlign : styles.rightAlign}`}
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {index % 2 === 0 ? (
                <>
                  <div className={styles.serviceDescription}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                </>
              ) : (
                <>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                  <div className={styles.serviceDescription}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
