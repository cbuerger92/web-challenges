import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

/* export default function Lights() {
  return (
    <StyledLights>
      <li>
        <Light name="Living Room" />
      </li>
      <li>
        <Light name="Kitchen" />
      </li>
      <li>
        <Light name="Bedroom" />
      </li>
      <li>
        <Light name="Bathroom" />
      </li>
      <li>
        <Light name="Garage" />
      </li>
      <li>
        <Light name="Porch" />
      </li>
      <li>
        <Light name="Garden" />
      </li>
      <li>
        <Light name="Office" />
      </li>
    </StyledLights>
  );
}
 */

const roomNames = [
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Bathroom",
  "Garage",
  "Porch",
  "Garden",
  "Office",
];

export default function Lights({ lights, toggleLight }) {
  return (
    <StyledLights>
      {roomNames.map((name, index) => (
        <li key={index}>
          <Light
            name={name} // Der Raumname bleibt bestehen
            isOn={lights[index]} // Zustand des Lichts
            toggleLight={() => toggleLight(index)} // Funktion zum Umschalten
          />
        </li>
      ))}
    </StyledLights>
  );
}

// roomNames: Ein Array, das alle ursprünglichen Raumnamen enthält

// lights[index]: Für jedes Licht im lights-Array wird der Zustand übergeben

// toggleLight={() => toggleLight(index)}: Ruft die toggleLight-Funktion mit dem entsprechenden Index auf, um das Licht umzuschalten
