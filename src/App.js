
import './App.css';
import MyForm from './Components/MyForm';

import overlayimg from './Images/Abstraction.png';

function App() {
  return (
    <>
      <div className="left-sec">
        <p>Find 3D Objects, Mockups and Ilustration here</p>
      </div>
      <div className="right-sec">
        <MyForm></MyForm>
      </div>
      <img src={overlayimg} alt="" />
    
    </>

  );
}

export default App;
