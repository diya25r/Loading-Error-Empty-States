import { useState, useEffect, useCallback } from 'react';
import { fetchOrders, fetchOrdersEmpty, fetchOrdersError } from '../api/mockApi';
import { getDemoState } from '../utils/demoState';

export const useOrders = () => {
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
          ? await fetchOrdersEmpty()
          : demoState === 'error'
            ? await fetchOrdersError()
            : await fetchOrders();
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
