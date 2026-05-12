import React from 'react';
import { useCustomers } from '../hooks/useCustomers';
import { LoadingSpinner, ErrorMessage, EmptyState } from '../components/states';
import CustomerRow from '../components/CustomerRow';

const Customers = () => {
    const { data: customers, isLoading, error, refetch } = useCustomers();

    if (isLoading) return <LoadingSpinner count={4} />;

    if (error)
      return (
        <ErrorMessage
          message="We couldn't load your customer list. Please verify your connection and try again."
          onRetry={refetch}
        />
      );

    if (!customers || customers.length === 0)
      return (
        <EmptyState
          title="No customers yet"
          message="Customer records will appear here as they are added."
        />
      );

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">Customer Management</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-100">
                    <thead className="bg-gray-50 capitalize">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Order History</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Total Value</th>
                            <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Details</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {customers.map(customer => (
                            <CustomerRow key={customer.id} customer={customer} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customers;
