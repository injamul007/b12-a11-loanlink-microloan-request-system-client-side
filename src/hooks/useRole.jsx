import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
  const {user, loading} = useAuth();
  const axiosInstance = useAxiosSecure();

  const {data: role='borrower', isLoading: isRoleLoading} = useQuery({
    enabled: !loading && !!user?.email,
    queryKey:['user-role', user?.email],
    queryFn: async()=> {
      const res = await axiosInstance.get(`/users/role`)
      return res.data.role;
    }
  })

  return {role, isRoleLoading};

};

export default useRole;