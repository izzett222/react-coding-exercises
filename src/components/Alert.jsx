export default function Alert() {
  function handleClick() {
    alert("clicked!");
  }
  return <button className="px-4 py-1 bg-pink-200 rounded" onClick={handleClick}>click me</button>;
}
