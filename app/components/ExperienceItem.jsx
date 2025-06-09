export default function ExperienceItem({ company, role, duration, description }) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <h4 className="font-semibold">{role} @ {company}</h4>
      <p className="text-sm text-gray-500">{duration}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
