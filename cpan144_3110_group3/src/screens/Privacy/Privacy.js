import React from "react";
import "./Legal-info.css";

const Privacy = () => {
  return (
    <div className="legal-info">
      <h1>Privacy Policy</h1>
      <p>Last Updated: [April 7, 2024]</p>

      <h2>Introduction</h2>
      <p>
        We value the privacy of our users and are committed to protecting
        personal information. This Privacy Policy outlines the types of
        information we collect and how we use and safeguard it.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <h3>Email Addresses</h3>
          <p>
            We collect your email address during the account signup process.
            This allows us to communicate with you, answer your queries, and
            send you important notifications regarding your account and our
            services.
          </p>
        </li>
        <li>
          <h3>Encrypted Passwords</h3>
          <p>
            Your passwords are encrypted and securely stored using advanced
            encryption techniques. This measure is crucial for maintaining the
            security of your account and the privacy of your access credentials.
          </p>
        </li>
        <li>
          <h3>Last Login Details</h3>
          <p>
            To enhance security and detect unauthorized account access, we
            monitor and record your account's last accessed date and time.
          </p>
        </li>
        <li>
          <h3>Account Creation Date and Time</h3>
          <p>
            We maintain records of when accounts are created for administrative
            purposes and to support account management functions.
          </p>
        </li>
        <li>
          <h3>IP Address and Geographic Location</h3>
          <p>
            Your IP address and country information are collected to help
            diagnose server issues, manage site operations, and understand
            geographic usage patterns. This data aids in providing a
            personalized experience and securing your account from unauthorized
            access.
          </p>
        </li>
      </ul>

      <h2>How We Protect Your Information</h2>
      <p>
        Protecting your privacy is our top priority. We implement a variety of
        security measures to maintain the safety of your personal information.
        Our strategies include secure servers, advanced encryption, and privacy
        protocols designed to safeguard your data against unauthorized access
        and disclosure.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We reserve the right to modify this privacy policy at any time. Any
        changes will be reflected on this page, and we encourage you to review
        our policy periodically to stay informed about how we are protecting
        your information.
      </p>
    </div>
  );
};

export default Privacy;
