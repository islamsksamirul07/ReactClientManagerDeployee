import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Button, Container } from 'reactstrap';
import Manues from './component/Manues';
import Home from './components-client/Home';
import AddClient from './components-client/AddClient';
import SearchClients from './components-client/SearchClients';
import AllClients from './components-client/AllClients';
import UpdateClients from './components-client/UpdateClients';
import { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import Home1 from './Components-manager/Home1';
import Search1 from './Components-manager/Search1';
import AllData1 from './Components-manager/AllData1';

function App() {
  //Dark mode create
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Define styles for dark and light modes
  const appStyles = {
      backgroundColor: darkMode ? '#121212' : '#f8f9fa',
      color: darkMode ? '#e0e0e0' : '#212529',
      minHeight: '100vh',
      transition: 'background-color 0.3s, color 0.3s'
  };



  // this is for manage two different button for go manager or client
  const [showNavbar, setShowNavbar] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    // Check local storage to determine if the navbar selection is already made
    const savedSelection = localStorage.getItem('navbarSelection');
    if (savedSelection) {
      setShowNavbar(savedSelection);
    }
    setLoading(false); // Set loading to false once the local storage check is done
  }, []);

  const handleButtonClick = (menuType) => {
    setShowNavbar(menuType);
    localStorage.setItem('navbarSelection', menuType); // Save the selection in local storage
  };

  const handleLogout = () => {
    localStorage.removeItem('navbarSelection'); // Clear the stored navbar selection
    setShowNavbar(null); // Reset the navbar state
    navigate('/'); // Redirect to the initial state or home page
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while checking local storage
  }





  return (
    <div style={appStyles}>
      {showNavbar === null && (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <Card className="text-center p-4" style={{ width: '400px' }}>
          <CardBody>
            <CardTitle tag="h5">Select an Option</CardTitle>
            <div className="d-flex flex-column align-items-center">
              <Button
                color="success"
                className="w-100 mb-3"
                style={{ height: '150px', fontSize: '24px' }}
                onClick={() => handleButtonClick('employee')}
              >
                Employee
              </Button>
              <Button
                color="success"
                className="w-100"
                style={{ height: '150px', fontSize: '24px' }}
                onClick={() => handleButtonClick('manager')}
              >
                Manager
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
      )}

      {showNavbar && <Manues menuType={showNavbar}
      darkMode={darkMode} toggleDarkMode={toggleDarkMode} onLogout={handleLogout} />}

      <Container>
        <Routes>
          {/* this is for employee path */}
          <Route path="/" element={<Home />} />
          <Route path="/search-client" element={<SearchClients />} />
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/all-clients" element={<AllClients />} />
          <Route path="/client-update" element={<UpdateClients />} />
          <Route path="/" element={<div>Welcome! Select an option above.</div>} />

          {/* this is for manager path */}
          <Route path="/home-admin" element={<Home1/>}/>
          <Route path="/search-admin" element={<Search1/>}/>
          <Route path="/all-admin" element={<AllData1/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
