import { useEffect } from 'react';
import "./about.modules.css";

export default function AboutMe() {
  useEffect(() => {
    // This ensures animations play when component mounts
    const paragraphs = document.querySelectorAll('#about p');
    paragraphs.forEach(p => p.style.opacity = '0');
  }, []);

  return (
    <section id="about">
      <p>I am <strong>Nada Boutou</strong>, a full-stack developer and designer based in Ottawa.</p>
      <p>I'm currently studying Mobile Application Design and Development at Algonquin College, and I love bringing creative ideas to life through code and design.</p>
      <p>My program is a mix of everything: <strong>UI/UX design</strong>, <strong>frontend and backend web development</strong>, and soon <strong>mobile development</strong>. It's given me real hands-on experience building full projects from idea to deployment — not just theory. I've worked with tools like HTML, CSS, JavaScript, React, Node.js, and MongoDB, and I've also designed interfaces using Figma, Photoshop, and Illustrator.</p>
      <p>What makes me different is that I don't just code — I think about the whole user experience. I can design a product, build it from scratch, and improve it across platforms. I'm now expanding into mobile technologies like React Native and Flutter, so I'll be able to create cross-platform apps too.</p>
      <p>I'm serious about leveling up and standing out in a very saturated industry.</p>
      <p>When I'm not building digital projects, I'm usually crafting something with my hands — literally. I love crocheting, baking, sewing, and all kinds of DIYs. Creativity fuels everything I do.</p>
      <p>Scroll down to see my work!</p>
    </section>
  );
}