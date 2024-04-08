import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>About BongoCat</h1>

      <section className="technology-stack">
        <h2>Our Technology Stack</h2>
        <p>
          At BongoCat, we're proud to utilize a modern and robust technology
          stack to provide our users with the best possible experience. Our
          platform is built using:
        </p>
        <ul>
          <li>
            <strong>React.js:</strong> A powerful JavaScript library for
            building user interfaces with dynamic, interactive elements.
          </li>
          <li>
            <strong>MongoDB:</strong> A document-based database that allows us
            to store data flexibly and scale our application efficiently.
          </li>
          <li>
            <strong>Express:</strong> A minimalist web framework for Node.js
            that enables us to build our server-side logic with ease.
          </li>
          <li>
            <strong>bcrypt:</strong> A trusted library for hashing and securing
            user passwords, ensuring that personal information is kept safe.
          </li>
          <li>
            <strong>JWT (JSON Web Tokens):</strong> A method for securely
            transmitting information between parties as a JSON object, critical
            for handling login sessions and user authentication.
          </li>
        </ul>
        <p>
          This combination of technologies ensures that BongoCat is not only
          fast and responsive but also secure and reliable for all our users.
        </p>
      </section>
    </div>
  );
};

export default About;
