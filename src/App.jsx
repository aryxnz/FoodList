import { useState } from "react";
import "./App.css";

function App() {
  const [presetFoods, setPresetFoods] = useState(["Pizza", "Burger", "Pasta", "Idli"]);
  const [foodList, setFoodList] = useState([]);
  const [inputFood, setInputFood] = useState("");

  const addFood = (item) => {
    if (item.trim() !== "") {
      setPresetFoods([...presetFoods, item]);  // Update bullet buttons
      setFoodList([...foodList, item]);        // Update selected list
      setInputFood("");                        // Clear input
    }
  };

  const deleteLastItem = () => {
    if (foodList.length > 0) {
      const lastItem = foodList[foodList.length - 1];
      setFoodList(foodList.slice(0, -1));
      
      // Remove last occurrence from bullet button list
      const index = [...presetFoods].lastIndexOf(lastItem);
      if (index !== -1) {
        const newPreset = [...presetFoods];
        newPreset.splice(index, 1);
        setPresetFoods(newPreset);
      }
    }
  };

  return (
    <div className="container">
      <h2>Food List!!!</h2>

      <ul>
        {presetFoods.map((food, idx) => (
          <li key={idx}>
            <button className="food-btn" onClick={() => addFood(food)}>
              {idx + 1}. {food}
            </button>
          </li>
        ))}
      </ul>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter food name"
          value={inputFood}
          onChange={(e) => setInputFood(e.target.value)}
        />
        <button onClick={() => addFood(inputFood)}>Add Item</button>
        <button className="delete-btn" onClick={deleteLastItem}>Delete Item</button>
      </div>

      {foodList.length > 0 && (
        <div className="result">
          <h3>Selected Items:</h3>
          <ul>
            {foodList.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
