
import { useEffect, useState } from 'react';

const Loader = () => {
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!show) return null;
  
  return (
    <div className="page-loader">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
