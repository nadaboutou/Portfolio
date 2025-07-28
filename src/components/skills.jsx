import { useEffect } from 'react';
import "./skills.modules.css";

export default function Skills() {
  useEffect(() => {
    // Reset animations when component mounts
    const elements = document.querySelectorAll('#skills h3, #skills ul');
    elements.forEach(el => el.style.opacity = '0');
  }, []);

  return (
    <section id="skills">
      <h2>Skills</h2>
      
      <h3>Frontend</h3>
      <ul>
        {['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Tailwind CSS', 'JavaScript (ES6+)', 
          'React', 'React Router', 'JSX', 'Responsive Web Design', 
          'DOM manipulation', 'Figma-to-React workflow'].map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      
      <h3>Backend</h3>
      <ul>
        {['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'Mongoose', 
          'MySQL (in progress)', 'PHP (summer course)', 'Google OAuth 2.0', 
          'JWT', 'Multer', 'MVC architecture', 'Deployment (Render, Vercel)'].map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      
      <h3>Mobile Development (in progress)</h3>
      <ul>
        {['React Native', 'Flutter', 'Dart', 'Android App Development', 
          'iOS App Development'].map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      
      <h3>Programming Languages</h3>
      <ul>
        {['JavaScript', 'Python', 'C++', 'C#', 'Java', 'PHP'].map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      
      <h3>UI/UX</h3>
      <ul>
        {['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'UI Design', 
          'Wireframing', 'Prototyping', 'Accessible Design', 
          'Google Fonts', 'Design Thinking'].map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      
      <h3>Tools</h3>
      <ul>
        {['Git', 'GitHub', 'VS Code', 'NPM', 'Yarn', 
          'Chrome DevTools', 'Postman', 'LocalStorage'].map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}