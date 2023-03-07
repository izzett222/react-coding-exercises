import { useState } from "react";
import ReactCardFlip from "react-card-flip";
export default function UserItem({ avatar, firstName, lastName, employment }) {
  const [flipped, setFlipped] = useState(false);
  const handleMouseEnter = () => {
    setFlipped(true);
  };
  const handleMouseLeave = () => {
    setFlipped(false);
  };
  return (
    <div className="h-96 bg-white rounded-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ReactCardFlip isFlipped={flipped}>
        <>
          <div className="min-w-[300px] min-h-[300px]">
            <img src={avatar} alt="" />
          </div>

          <div className="p-4">
            <h3 className="font-bold text-lg">
              {firstName} {lastName}
            </h3>
            <p>{employment.title}</p>
          </div>
        </>
        <h1 className="w-[300px] px-5 text-center font-bold pt-10 text-2xl">More information here</h1>
      </ReactCardFlip>
    </div>
  );
}
