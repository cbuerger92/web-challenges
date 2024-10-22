/* import { useState } from "react"; */
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

/* export default function Light({ name }) {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle();
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
} */

export default function Light({ name, isOn, toggleLight }) {
  return (
    <LightButton
      type="button"
      onClick={toggleLight} // toggleLight Funktion aus den Props
      $isOn={isOn} // isOn Zustand aus den Props
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
