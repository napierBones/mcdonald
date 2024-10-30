'use client';

import { OrderType } from '@/types';
import React from 'react';
import { QueryClient, useMutation, useQuery } from 'react-query';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

const OrdersPage = () => {
  const { data: session } = useSession();
  const { isLoading, data } = useQuery('orders', () =>
    fetch('http://localhost:3000/api/orders').then(res => res.json())
  );

  const queryClient = new QueryClient();

  const mutation = useMutation({
    mutationFn: ({ status, id }: { status: string; id: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries('orders');
    },
  });

  const handleupdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
    mutation.mutate({ id, status });
    toast.success('Order status is updated');
  };
  if (isLoading) return 'Loading...';

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType, index: number) => (
            <tr className={`${item.status !== 'delivered' && 'bg-red-50'} text-sm md:text-base`} key={index}>
              <td className="hidden px-1 py-6 md:block">{item.id}</td>
              <td className="px-1 py-6">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="px-1 py-6">{item.price}</td>
              <td className="hidden px-1 py-6 md:block">
                {item.products[0].title}
              </td>

              {session?.user.isAdmin ? (
                <td>
                  <form
                    onSubmit={e => handleupdate(e, item.id)}
                    className="flex items-center justify-center gap-2"
                  >
                    <input
                      placeholder={item.status}
                      className="p-2 ring-red-100"
                    />
                    <button className="bg-red-500 p-2">
                      <MdOutlineModeEditOutline />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="px-1 py-6">{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
