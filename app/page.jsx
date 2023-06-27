"use client"
import SearchBox from "./components/SearchBox";
import RobotCard from "./components/RobotCard";
import RobotsData from "./robots/robots.json";
import {useState, useEffect} from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filteredRobots, setFilteredRobots] = useState([]);
  useEffect(() => {
    const filtered = RobotsData.filter((robot) => {
      return robot.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredRobots(filtered);
  }, [query]);
  return (
    <div className="bg-auto text-center bg-gradient-to-r from-cyan-500 to-indigo-600">
      <div className="container mx-auto py-4">
        <h1 className="text-xl text-white">RoboFriends</h1>
        <SearchBox setQuery={setQuery}
/>
        <div className="container">
          <div className="columns-1 sm:columns-2 md:columns-2 xl:columns-4 gap-y-3 my-6">
          {filteredRobots.map((robot) => (
              <RobotCard key={robot.id} name={robot.name} email={robot.email} id={robot.id} />
            ))}
            {RobotsData.map((robot) => {
              return (
                <RobotCard
                  name={robot.name}
                  email={robot.email}
                  id={robot.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
