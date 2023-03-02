export default function List() {
  const list = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <ul className="list-disc">
      {list.map((el, i) => {
        return <li key={i}>{el}</li>;
      })}
    </ul>
  );
}
