export default function UserItem({
  avatar,
  first_name,
  last_name,
  employment,
}) {
  return (
    <div className="h-96 bg-white rounded-lg">
      <div className="min-w-[300px] min-h-[300px]">
        <img src={avatar} alt="" />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg">
          {first_name} {last_name}
        </h3>
        <p>{employment.title}</p>
      </div>
    </div>
  );
}
