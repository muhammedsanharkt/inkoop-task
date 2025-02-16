import { useState } from "react";

function NumberInput() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;

    
    if (!/^-?\d*$/.test(input)) return;
    
    setValue(input);
    const num = parseInt(input, 10);

    if (isNaN(num)) {
      setMessage("");
    } else if (num < 0) {
      setMessage("Enter a positive value");
    } else {
      const isEven = num % 2 === 0;
      const nextNumbers = isEven
        ? [num + 2, num + 4, num + 6]
        : [num + 2, num + 4, num + 6];

      setMessage(`Next 3 ${isEven ? "even" : "odd"} numbers: ${nextNumbers.join(", ")}`);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter a number"
        className="border p-2 rounded w-64 text-center"
      />
      <p className="text-lg text-gray-700">{message}</p>
    </div>
  );
}

export default NumberInput;
