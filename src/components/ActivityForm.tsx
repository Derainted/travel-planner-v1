import { useState } from "react";

interface Props {
  heading: string;
  onAddActivity: (activity: { name: string; destination: string }) => void;
}

const ActivityForm = ({ onAddActivity, heading }: Props) => {
  const [activityName, setActivityName] = useState("");
  const [destination, setDestination] = useState("");

  const handleClick = () => {
    onAddActivity({ name: activityName, destination });
    setActivityName("");
    setDestination("");
  };

  return (
    <div>
      <h1>{heading}</h1>
      <input
        type="text"
        placeholder="Write activity name..."
        value={activityName}
        onChange={(e) => setActivityName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Write destination"
        onChange={(e) => setDestination(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Add activity
      </button>
    </div>
  );
};

export default ActivityForm;
