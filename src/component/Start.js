import React, { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Manues from "../components-client/Manues";

function Start() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleEmployeeClick = () => {
    setShowMenu(true);
    navigate("/employee-manu");
  };

  const handleManagerClick = () => {
    // Handle Manager button click if needed
  };

  return (
    <div>
      {!showMenu && (
        <>
          <Button color="success" onClick={handleEmployeeClick}>
            Employee
          </Button>
          <Button color="success" onClick={handleManagerClick}>
            Manager
          </Button>
        </>
      )}
      {showMenu && <Manues />}
    </div>
  );
}

export default Start;
