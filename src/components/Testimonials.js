import React from "react";
import styles from "../assets/styles/Testimonials.module.css"; // Importando o CSS Module
const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      image: "/assets/images/client1.jpg",
      message: "Excelente atendimento e serviços maravilhosos! Sempre me sinto bem cuidada.",
    },
    {
      name: "João Pereira",
      image: "/assets/images/client2.jpg",
      message: "Ambiente acolhedor e profissionais super qualificados. Super recomendo!",
    },
    {
      name: "Ana Souza",
      image: "/assets/images/client3.jpg",
      message: "Adoro o corte de cabelo que fiz, sempre saio de lá renovada e feliz.",
    },
    {
      name: "Carlos Costa",
      image: "/assets/images/client4.jpg",
      message: "A manicure foi perfeita! Recomendo a todos que querem um serviço de qualidade.",
    },
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2>O que nossos clientes dizem</h2>
        <div className={styles.gridContainer}>
          {testimonials.map((testimonial, index) => (
            <div className={styles.testimonialCard} key={index}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={styles.testimonialImage}
              />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
