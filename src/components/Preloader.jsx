import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Set a timer for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
    </div>
  ) : null;
};

export default Preloader;
