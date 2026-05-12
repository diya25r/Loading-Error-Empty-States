export const getDemoState = () => {
  if (typeof window === 'undefined') return null;
  const pageParams = new URLSearchParams(window.location.search);
  if (pageParams.has('state')) return pageParams.get('state');

  const hashQuery = window.location.hash.split('?')[1] || '';
  return new URLSearchParams(hashQuery).get('state');
};
