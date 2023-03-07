import JokeItem from "./JokeItem";

export default function Jokes() {
  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <div className="flex gap-4">
      {jokes.map((joke) => (
        <JokeItem key={joke.id} {...joke} />
      ))}
    </div>
  );
}
