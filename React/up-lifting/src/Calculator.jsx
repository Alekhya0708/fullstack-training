import React, { useState } from "react";
import { Button, TextField, Typography, Card, CardContent, Grid } from "@mui/material";

const CalculatorParent = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid input");
      return;
    }

    switch (operation) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "*":
        setResult(n1 * n2);
        break;
      case "/":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
        break;
      default:
        setResult("Error");
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", padding: 3, textAlign: "center" }}>
      <CardContent>
        <h1>5. Simple Calculator with Lifting State</h1>
        <TextField
          label="Number 1"
          variant="outlined"
          fullWidth
          margin="normal"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <TextField
          label="Number 2"
          variant="outlined"
          fullWidth
          margin="normal"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <CalculatorChild handleCalculate={handleCalculate} />
        {result !== null && (
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Result: {result}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

const CalculatorChild = ({ handleCalculate }) => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
      {["+", "-", "*", "/"].map((op) => (
        <Grid item key={op}>
          <Button variant="contained" onClick={() => handleCalculate(op)}>
            {op}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default CalculatorParent;
