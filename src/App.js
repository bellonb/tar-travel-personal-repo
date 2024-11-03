import logo from './logo.svg';
import './App.css';
import MainMap from './Components/MainMap.jsx'
import UserInterface from './Components/UserInterface.jsx';
import { useState } from 'react';
import UniversityData from "./dummy.json";


function App() {
  const [currentUniversity, setCurrentUniversity] = useState(null);

  const handleCurrentUniversity = (universityKey) => {
    const selectedUniversity = UniversityData.universities.find(uni => uni.name === universityKey);
    setCurrentUniversity(selectedUniversity);
  }

  return (
    <div className="wrapper">
      <div className="main">
        <div className="ui-container">
         <UserInterface
              universityName={currentUniversity ? currentUniversity.name : "Select a University!"}
              description={currentUniversity ? currentUniversity.overview.description : ""}
              details={currentUniversity ? currentUniversity.overview.details : ""}
            /> 
        </div>
        <div className="map-container">
          currentUniversity ? <MainMap 
              universities={UniversityData.universities}
              onSelectUniversity={handleCurrentUniversity}
          /> 
        </div>
      </div>
      </div>
  );
}

export default App;
