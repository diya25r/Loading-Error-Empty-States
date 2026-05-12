import { useState, useEffect, useCallback } from 'react';
import { fetchCustomers, fetchCustomersEmpty, fetchCustomersError } from '../api/mockApi';
import { getDemoState } from '../utils/demoState';

export const useCustomers = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const demoState = getDemoState();
      if (demoState === 'loading') return;
      const result =
        demoState === 'empty'
          ? await fetchCustomersEmpty()
          : demoState === 'error'
            ? await fetchCustomersError()
            : await fetchCustomers();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      if (getDemoState() !== 'loading') {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};
