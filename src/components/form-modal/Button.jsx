export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg p-2 border bg-blue-600 text-white font-bold"
    >
      {children}
    </button>
  );
}
