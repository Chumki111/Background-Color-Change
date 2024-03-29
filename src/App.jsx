import { useState } from "react";

const colors = ['white', 'gray', 'red', 'blue', 'purple','teal']

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <>
    <h2 className="text-center text-2xl md:text-4xl font-semibold mt-5">Change the background Color</h2>
      <div className={`flex justify-center items-center h-screen bg-${backgroundColor}`}>
        
      <div className="flex flex-wrap justify-center">
        {colors?.map((color) => (
          <div
            key={color}
            className="w-24 h-24 rounded-lg shadow-lg mx-4 my-4 cursor-pointer transition-all duration-200 hover:w-28 hover:h-28"
            style={{ backgroundColor: color }}
            onClick={() => changeBackgroundColor(color)}
          ></div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
