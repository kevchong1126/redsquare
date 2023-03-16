import { useContext } from "react";
import { Context } from "./context/ContextProvider";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Info from  './components/Info';
import SelectClients from './components/SelectClients';
import Contact from './components/Contact'
import Banner from './components/Banner'
import BlurModal from "./components/BlurModal";

function App() {
  const {isBlurry} = useContext(Context);

  return (
      <div>
        <Navbar />
        <Main />
        <Info />
        <SelectClients />
        <Contact />
        <Banner />
        {isBlurry && <BlurModal />}
      </div>
  )
  
  
};

export default App;
