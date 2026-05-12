import { useState, useEffect, useCallback } from 'react';
import { fetchDashboardStats } from '../api/mockApi';
import { getDemoState } from '../utils/demoState';

export const useDashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const demoState = getDemoState();
      if (demoState === 'loading') return;
      if (demoState === 'empty') {
        setData(null);
        return;
      }
      if (demoState === 'error') {
        throw new Error('Unable to load dashboard statistics.');
      }
      const result = await fetchDashboardStats();
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
