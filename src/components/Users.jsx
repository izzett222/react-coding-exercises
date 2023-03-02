import { useEffect, useState } from "react";
import UserItem from "./UserItem";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="w-full h-full flex justify-center flex-wrap gap-5 bg-[#E1F6DC] py-10">
      {users.length !== 0 &&
        users.map((el) => <UserItem key={el.id} {...el} />)}
    </div>
  );
}
