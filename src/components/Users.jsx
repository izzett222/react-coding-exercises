import { useEffect, useState } from "react";
import UserItem from "./UserItem";

export default function Users() {
  const [users, setUsers] = useState([]);
  const getRandomUsers = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(getRandomUsers, []);
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center gap-5 bg-[#E1F6DC] py-10">
      <button
        className="bg-red-500 px-4 py-2 text-white text-xl uppercase rounded-md"
        onClick={getRandomUsers}
      >
        Fetch Random
      </button>
      <div className="flex justify-center flex-wrap gap-5">
        {users.length !== 0 &&
          users.map((user) => (
            <UserItem
              key={user.id}
              avatar={user.avatar}
              firstName={user.first_name}
              lastName={user.last_name}
              employment={user.employment}
            />
          ))}
      </div>
    </div>
  );
}
