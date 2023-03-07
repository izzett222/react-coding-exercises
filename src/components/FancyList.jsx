import FancyListitem from "./FancyListItem";
export default function FancyList() {
  const list = ["🐶 dog", "🐈 cat", "🐔 chicken", "🐮 cow", "🐑 sheep", "🐴 horse"];
  return (
    <ul className="border border-gray-700 rounded-md">
      {list.map((animal, index) => {
        return <FancyListitem key={index}>{animal}</FancyListitem>;
      })}
    </ul>
  );
}