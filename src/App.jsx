import React, { useState } from "react";
import TabNavigation from "./components/TabNavigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './style/index.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home')

  //render kontent berdasarkan tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
      case 'Contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div>

    <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Konten berdasarkan tab */}
      <div className="">

        {renderContent()}
      </div>

     
    </div>
  )
}

export default App