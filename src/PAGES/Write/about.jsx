const aboutData = {
    mission: "Our mission is to revolutionize industries with cutting-edge technology.",
    vision: "We envision a world where businesses and individuals thrive in a digital-first ecosystem.",
    values: [
      "Innovation",
      "Integrity",
      "Collaboration",
      "Sustainability",
    ],
    team: [
      { id: 1, name: "JAY DARJI", role: "CEO", bio: "A visionary leader who believes in pushing the boundaries." },
      { id: 2, name: "HARSH KOTAK", role: "CTO", bio: "Leading the tech department with passion and expertise." },
      { id: 3, name: "SHAILESH PATEL", role: "CMO", bio: "Driving the brand and communication strategies forward." },
    ],
  };
  
  const About = () => {
    return (
      <div className="about-container">
        {/* Mission Section */}
        <section className="mission-section">
          <div className="overlay">
            <h1 className="mission-title">Our Mission</h1>
            <p className="mission-description">{aboutData.mission}</p>
          </div>
        </section>
  
        {/* Vision Section */}
        <section className="vision-section">
          <h1 className="section-title">Our Vision</h1>
          <p className="section-description">{aboutData.vision}</p>
        </section>
  
        {/* Core Values Section */}
        <section className="values-section">
          <h1 className="section-title">Core Values</h1>
          <div className="values-list">
            {aboutData.values.map((value, index) => (
              <div key={index} className="value-item">
                {value}
              </div>
            ))}
          </div>
        </section>
  
        {/* Team Section */}
        <section className="team-section">
          <h1 className="section-title">Meet Our Team</h1>
          <div className="team-list">
            {aboutData.team.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-content">
                  <h3 className="team-member-name">{member.name}</h3>
                  <h4 className="team-member-role">{member.role}</h4>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default About;