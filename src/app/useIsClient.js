'use client';

import { useState, useEffect } from 'react';


function useIsClient() {
  const [isClient, setIsClient] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

export default useIsClient;
