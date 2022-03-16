import { useState, useEffect } from "react";
import { StyledInput, StyledButton } from "./Form.styled";

export const Form = ({ getForecastData }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!city || city === "") return;
    getForecastData(city);
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        aria-label="location"
        type="text"
        placeholder="Paris, Londres, ..."
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <StyledButton onClick={onSubmit}>Rechercher</StyledButton>
    </form>
  );
};
