import React from 'react';
import myPic from "../../assets/profilepic.jpg"

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      
        <img src={myPic} alt="My Picture"/>
          <p>
          I recently received my full-stack coding certificate through the University of Minnesota Full Stack Bootcamp. I have worked on many technical projects on the business side and am looking to make a career change to work on the technical side. I have a passion for accessibility and went through IAAP's (International Association of Accessibility Professionals) Certified Professional in Accessibility Core Competencies (CPACC) certification. I have previous experience as a content manager for the Minnesota Department of Education's website and doing document remediation for accessibility. The experience and skills I gained at the full stack bootcamp are a perfect match for my love of being creative and problem solving in order to develop a high-quality final product.
          </p>
    </div>
  );
}