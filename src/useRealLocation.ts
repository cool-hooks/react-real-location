import { useMemo } from 'react';
import { useLocation } from 'react-router';

export const useRealLocation = () => {
  const location = useLocation();

  return useMemo(() => location, [window?.location]);
};
