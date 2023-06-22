import { useEffect, useState } from "react";


const useClass = () => {
    const [myClass,setMyClass]=useState([])
    useEffect(() => {
        fetch("http://localhost:5000/class")
          .then((res) => res.json())
          .then((data) => {
             
              setMyClass(data);
            
        
           
          });
      }, []);
      return [myClass]
};

export default useClass;