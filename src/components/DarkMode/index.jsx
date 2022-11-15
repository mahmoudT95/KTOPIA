import { useState,useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";
import './DarkMode.scss'
function DarkMode() {

  const [mode,setMode] = useState(false)
  // add localStorage to dark mode 
  useEffect(() => {
    if (localStorage.darkMode) {
      document.body.classList.remove(localStorage.mode)
      }else{
      document.body.classList.add(localStorage.mode)
      }
  }, [mode])
  
  const handleDarkMode = ()=>{
    if (mode) {
      setMode(false)
      document.body.classList.add("darkMode")
      localStorage.setItem("mode","darkMode")
      }else{
      setMode(true)
      document.body.classList.remove("darkMode")
      localStorage.removeItem("mode")
      }
  }
  return (
    <div onClick={handleDarkMode}>
      <BsMoonFill className='dark_icon'></BsMoonFill>
    </div>
  );
}

export default DarkMode;
