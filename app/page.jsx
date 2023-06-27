"use client";
import SearchBox from "./components/SearchBox";
import RobotCard from "./components/RobotCard";
import RobotsData from "./robots/robots.json";
import Grid from "@mui/joy/Grid";
import { useState, useEffect } from "react";

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
    <div className="bg-auto text-center bg-gradient-to-r from-cyan-500 to-indigo-600" style={{minHeight:"100vh"}}>
      <div className="container mx-auto py-4">
        <h1 className="text-xl text-white">RoboFriends</h1>
        <SearchBox setQuery={setQuery} />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          columns={{ xs: 12, sm: 6, md: 4 }}
        >
          {filteredRobots.map((robot) => (
            <RobotCard
              key={robot.id}
              name={robot.name}
              email={robot.email}
              id={robot.id}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}
