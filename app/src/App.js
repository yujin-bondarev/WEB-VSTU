import "./App.css";
import RacersAPI from "./api/service";
import Table from "./Table";
import Form from "./Form.js";
import { useState } from "react";

const initialracers = RacersAPI.all();

function App() {
  const [racers, setRacers] = useState(initialracers);

  const delRacer = (number) => {
    if (RacersAPI.delete(number)) {
      setRacers(racers.filter((racer) => racer.number !== number));
    }
  };

  const addRacer = (racer) => {
    const newracer = RacersAPI.add(racer);
    if (newracer) {
      setRacers([...racers, newracer]);
    }
  };

  return (
    <div className="App">
      <Form handleSubmit={addRacer} inracer={{ name: "", carModel: "" }} />
      <Table racers={racers} delRacers={delRacer} />
    </div>
  );
}

export default App;
