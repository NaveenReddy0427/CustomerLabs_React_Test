import { useState } from "react";
import PopUpContainer from "../PopUp/PopUpContainer";

const Button = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handleSaveSegment = () => {
        setShowPopup(true);
    };

    return (
        <div className="App">
            <button onClick={handleSaveSegment}>Save segment</button>
            {showPopup && <PopUpContainer onClose={() => setShowPopup(false)} />}
        </div>
    );
}

export default Button;
