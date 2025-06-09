"use client";

import Header from "@/components/Header";
import ExperienceItem from "@/components/ExperienceItem";
import SkillBadge from "@/components/SkillBadge";
import SectionTitle from "@/components/SectionTitle";
import { about, experiences, skills, projects, education } from "@/data/resumeData";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <Header name={about.name} role={about.role} summary={about.summary} />

      <SectionTitle title="Experience" />
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>

      <SectionTitle title="Skills" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>

      <SectionTitle title="Projects" />
      <ul className="list-disc list-inside">
        {projects.map((proj, index) => (
          <li key={index}>
            <a href={proj.link} className="text-blue-500 hover:underline" target="_blank">{proj.name}</a>: {proj.description}
          </li>
        ))}
      </ul>

      <SectionTitle title="Education" />
      <ul className="list-disc list-inside">
        {education.map((edu, index) => (
          <li key={index}>{edu.degree} at {edu.school} ({edu.duration})</li>
        ))}
      </ul>
    </div>
  );
}
