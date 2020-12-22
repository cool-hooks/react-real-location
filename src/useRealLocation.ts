import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Location } from 'history';

export const useRealLocation = () => {
  const [realLocation, setRealLocation] = useState<Location>();

  const location = useLocation();

  useEffect(() => {
    setRealLocation(location);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window?.location]);

  return realLocation;
};
