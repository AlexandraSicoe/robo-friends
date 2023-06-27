"use client";
import Card from "@mui/joy/Card";

import Typography from "@mui/joy/Typography";
const RobotCard = ({ name, email, id }) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Card variant="outlined">
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          {name}
        </Typography>
        <img alt="robots" src={`https://robohash.org/${id}`} />
        <Typography level="h3" fontSize="md" sx={{ mb: 0.5 }}>
          {email}
        </Typography>
      </Card>
    </div>
  );
};
export default RobotCard;
