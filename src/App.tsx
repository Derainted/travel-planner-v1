import { useState } from "react";
import ActivityForm from "./components/ActivityForm";


function App() {
  const [actvities, setActivites] = useState<{ name: string; destination: string;}[]>([]);

  const handleAddActivity = (activity: {name: string; destination: string }) => {
    setActivites((prev) => [...prev, activity]);
  };

  return (
    <>
      <ActivityForm onAddActivity={handleAddActivity} heading="Travel Planer"/>
      <ul>
        {actvities.map((activity, index ) => (
          <li key={index}>
            {activity.name} - {activity.destination}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
