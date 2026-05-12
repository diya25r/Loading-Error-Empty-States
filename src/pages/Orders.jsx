import React from 'react';
import { useOrders } from '../hooks/useOrders';
import { LoadingSpinner, ErrorMessage, EmptyState } from '../components/states';
import OrderCard from '../components/OrderCard';

function Orders() {
  const { data, isLoading, error, refetch } = useOrders();

  if (isLoading) return <LoadingSpinner count={4} />;

  if (error)
    return (
      <ErrorMessage
        message="We couldn't load your orders. Check your internet connection and try again."
        onRetry={refetch}
      />
    );

  if (data.length === 0)
    return (
      <EmptyState
        title="No orders yet"
        message="When you place your first order, it will appear here."
        actionLabel="Browse products"
        onAction={() => window.location.href = '/products'}
      />
    );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">Orders</h1>
      <div className="space-y-4">
        {data.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;