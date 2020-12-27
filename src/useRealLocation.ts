import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

export const useRealLocation = () => {
  const location = useLocation();

  const [realLocation, setRealLocation] = useState(location);

  useEffect(() => {
    setRealLocation(location);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window?.location]);

  return realLocation;
};
