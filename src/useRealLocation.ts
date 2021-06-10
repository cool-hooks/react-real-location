import { useMemo } from 'react';
import { useLocation } from 'react-router';

export const useRealLocation = () => {
  const location = useLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => location, [window?.location]);
};
