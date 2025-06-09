export default function Header({ name, role, summary }) {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-4xl font-bold">{name}</h1>
      <h2 className="text-xl text-gray-500">{role}</h2>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
}
