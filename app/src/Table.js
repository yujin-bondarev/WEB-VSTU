import React from "react";

const Table = ({ racers, delRacers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Car Model</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {racers.map((racer, index) => {
          return (
            <tr key={index}>
              <td>{racer.name}</td>
              <td>{racer.carModel}</td>
              <td>
                <button onClick={() => delRacers(racer.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;