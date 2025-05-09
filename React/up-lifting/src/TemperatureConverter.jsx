import { Container, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ParentTempConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("Celsius");

  const convertTemperature = (temp, unit) => {
    if (temp === "" || isNaN(temp)) return "";
    return unit === "Celsius"
      ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9;  
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    if (name === "temperature") {
      setTemperature(value);
    }

    if (name === "unit") {
      const prevUnit = unit;
      setUnit(value);

      if (temperature !== "") {
        const tempValue = parseFloat(temperature);
        const convertedTemp = prevUnit === "Celsius"
          ? (tempValue * 9) / 5 + 32 
          : ((tempValue - 32) * 5) / 9;
        setTemperature(convertedTemp.toFixed(2));
      }
    }
  };

  const convertedTemperature =
    temperature !== "" ? convertTemperature(parseFloat(temperature), unit).toFixed(2) : "";

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4">8. Temperature Converter</Typography>
      <ChildTempUnits
        temperature={temperature}
        unit={unit}
        handleChange={handleChange}
        convertedTemperature={convertedTemperature}
      />
    </div>
  );
};

const ChildTempUnits = ({ temperature, unit, handleChange, convertedTemperature }) => {
  return (
    <Container maxWidth="sm">
      <TextField
        name="temperature"
        type="number"
        label="Enter Temperature"
        variant="outlined"
        value={temperature}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="unit"
        select
        label="Select Unit"
        value={unit}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      >
        <MenuItem value="Celsius">Celsius</MenuItem>
        <MenuItem value="Fahrenheit">Fahrenheit</MenuItem>
      </TextField>
      {convertedTemperature !== "" && (
        <Typography variant="h6" style={{ marginTop: "20px", fontWeight: "bold" }}>
          Converted Temperature: {convertedTemperature} {unit === "Celsius" ? "Fahrenheit" : "Celsius"}
        </Typography>
      )}
    </Container>
  );
};

export default ParentTempConverter;
