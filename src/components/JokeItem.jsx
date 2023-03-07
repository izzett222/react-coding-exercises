export default function JokeItem({setup, punchline}) {
    return <div className="shadow-lg w-96 h-36 rounded-xl flex flex-col gap-5 text-center justify-center px-4">
        <h3 className="font-bold text-xl">{setup}</h3>
        <p>{punchline}</p>
    </div>
}