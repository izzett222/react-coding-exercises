export default function Button({ name, children }) {
  function handleClick() {
    alert(`You clicked on button ${name}`);
  }
  return (
    <button className="px-4 py-1 bg-pink-200 rounded" onClick={handleClick}>
      {children}
    </button>
  );
}
