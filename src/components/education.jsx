import { useEffect, useRef } from 'react';
import "./education.modules.css";

export default function Education() {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <section id="education">
      <div className="education-container">
        <div ref={educationRef} className="education-item">
          <h2 className="degree">Mobile Application Design and Development</h2>
          <p className="institution">Algonquin College, Ottawa</p>
          <span className="date">Expected Graduation: 2026</span>
          
          <div className="courses">
            <h3 className="courses-title">Relevant Courses:</h3>
            <div className="course-list">
              {['UI/UX Design', 'Frontend Development', 'Backend Development', 
                'Mobile App Development', 'Database Systems', 'API Design',
                'Responsive Web Design', 'Agile Methodologies'].map(course => (
                <span key={course} className="course-item">{course}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}