import React, { useState } from 'react';
import DonationModal from './DonationModal';

const projects = [
  {
    id: 'tents',
    icon: 'fas fa-campground',
    color: '#e67e22',
    gradient: 'linear-gradient(135deg, #e67e22, #f39c12)',
    title: 'Emergency Shelter Tents',
    description:
      'Provide emergency shelter tents for families who lost their homes due to the ongoing conflict in Sudan.',
    goal: 5000,
    raised: 2100,
    unit: 'tents for 50 families',
  },
  {
    id: 'water',
    icon: 'fas fa-tint',
    color: '#2980b9',
    gradient: 'linear-gradient(135deg, #1a6b99, #3498db)',
    title: 'Drinking Water Wells',
    description:
      'Dig clean water wells in displacement camps to provide safe drinking water and prevent disease.',
    goal: 8000,
    raised: 3400,
    unit: '3 wells serving 600+ people',
  },
  {
    id: 'clinic',
    icon: 'fas fa-clinic-medical',
    color: '#27ae60',
    gradient: 'linear-gradient(135deg, #1e8449, #2ecc71)',
    title: 'Medical Clinic Setup',
    description:
      'Establish small medical clinics in displacement camps to treat injuries, infections, and maternal care.',
    goal: 12000,
    raised: 4800,
    unit: '1 clinic serving 1,000 people',
  },
  {
    id: 'medical',
    icon: 'fas fa-medkit',
    color: '#c0392b',
    gradient: 'linear-gradient(135deg, #a93226, #e74c3c)',
    title: 'Medical Supplies',
    description:
      'Provide essential medicines, bandages, and medical equipment urgently needed in displacement areas.',
    goal: 3000,
    raised: 1800,
    unit: 'kits for 200 families',
  },
  {
    id: 'daycare',
    icon: 'fas fa-child',
    color: '#8e44ad',
    gradient: 'linear-gradient(135deg, #7d3c98, #a569bd)',
    title: 'Children\'s Daycare',
    description:
      'Create safe daycare spaces for displaced children — providing education, play, and emotional support.',
    goal: 4000,
    raised: 1200,
    unit: 'daycare for 80 children',
  },
  {
    id: 'kitchen',
    icon: 'fas fa-utensils',
    color: '#d35400',
    gradient: 'linear-gradient(135deg, #ba4a00, #e67e22)',
    title: 'Community Kitchen',
    description:
      'Set up community kitchens to prepare and distribute daily hot meals to displaced families and the elderly.',
    goal: 6000,
    raised: 2600,
    unit: '300 meals per day',
  },
];

function ProjectCard({ project, onDonate }) {
  const pct = Math.round((project.raised / project.goal) * 100);

  return (
    <div className="project-card">
      <div className="project-card-top" style={{ background: project.gradient }}>
        <div className="project-icon-circle">
          <i className={project.icon}></i>
        </div>
        <div className="project-raised-badge">
          {pct}% funded
        </div>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-progress-wrap">
          <div className="project-progress-bar">
            <div
              className="project-progress-fill"
              style={{ width: `${pct}%`, background: project.gradient }}
            />
          </div>
          <div className="project-progress-labels">
            <span style={{ color: project.color, fontWeight: 700 }}>€{project.raised.toLocaleString()} raised</span>
            <span>Goal: €{project.goal.toLocaleString()}</span>
          </div>
        </div>

        <p className="project-unit">
          <i className="fas fa-bullseye" style={{ marginRight: 6, color: project.color }}></i>
          {project.unit}
        </p>

        <button
          className="project-donate-btn"
          style={{ background: project.gradient }}
          onClick={() => onDonate(project)}
        >
          <i className="fas fa-heart"></i> Donate Now
        </button>
      </div>
    </div>
  );
}

function HumanitarianProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <div id="projects" className="humanitarian-section">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Support Sudan — Humanitarian Projects</h2>
          <p className="projects-subtitle">
            Our community is raising funds for urgent relief projects helping displaced Sudanese
            families survive the war. Every euro makes a real difference.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} onDonate={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <DonationModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default HumanitarianProjects;
