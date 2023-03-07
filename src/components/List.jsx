export default function List() {
  const list = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <ul className="list-disc">
      {list.map((animal, index) => {
        return <li key={index}>{animal}</li>;
      })}
    </ul>
  );
}
