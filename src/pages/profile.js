import React, { useEffect } from "react";
import TawkTo from "tawkto-react";
import UpdateProFile from "../components/UpdateProfile";



const Profile = () => {
    useEffect(() => {
        const tawk = new TawkTo("620a265fb9e4e21181befc34", "1frrqbq25");
    
        tawk.onStatusChange((status) => {
          console.log(status);
        });
      }, []);
    
  return (
    
        <div><UpdateProFile /></div>
        
        
    
  )
}


export default Profile