import { useState } from "react";
import PopUp from "../PopUp/PopUp";

const Button = () => {
  
    const [showPopup, setShowPopup] = useState(false);

    const handleSaveSegment = () => {
      setShowPopup(true);
    };
  
    return (
      <div className="App">
        <button onClick={handleSaveSegment}>Save segment</button>
        {showPopup && <PopUp onClose={() => setShowPopup(false)} />}
      </div>
    );
}

export default Button;