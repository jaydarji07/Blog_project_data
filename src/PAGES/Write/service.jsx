
const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern web development services using the latest technologies like React, Angular, and Node.js.',
    icon: '💻',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'We build responsive, scalable mobile apps for iOS and Android platforms using React Native and Flutter.',
    icon: '📱',
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description: 'Optimize your website for better ranking and visibility on search engines with our advanced SEO strategies.',
    icon: '🚀',
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing with AWS, Google Cloud, and Azure for better scalability and security.',
    icon: '☁️',
  },
];

const Service = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <p style={styles.subHeading}>
        We offer a wide range of professional services to meet your business needs.
      </p>
      <div style={styles.serviceGrid}>
        {services.map((service) => (
          <div key={service.id} style={styles.serviceCard}>
            <div style={styles.icon}>{service.icon}</div>
            <h2 style={styles.title}>{service.title}</h2>
            <p style={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '42px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  subHeading: {
    fontSize: '18px',
    marginBottom: '40px',
    color: '#555',
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  serviceCardHover: {
    transform: 'scale(1.05)',
  },
  icon: {
    fontSize: '50px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
  },
};

export default Service;