import NCodeLogo from "../components/NCodeLogo";
import LoadingBar from "./LoadingBar";

function Preloader() { 
  return ( 
    <div className="preloader"> 
      <div className="preloader-content"> 
        <div className="logo-container"> 
          <NCodeLogo />
          <LoadingBar />
        </div> 
      </div> 
    </div> 
  );
} 

export default Preloader;