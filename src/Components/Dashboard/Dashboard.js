import React, { useContext } from 'react';
import useIfAdmin from '../../hooks/useIfAdmin';
import useIfBuyer from '../../hooks/useIfBuyer';
import useIfSeller from '../../hooks/useIfSeller';
import AllSellers from '../AllSellers/AllSellers';
import { AuthContext } from '../Context/AuthProvider';
import MyBookings from '../MyBookings/MyBookings';
import MyProducts from '../MyProducts/MyProducts';

const Dashboard = () => {
    const {user, logout} = useContext(AuthContext);
  const [isAdmin] = useIfAdmin(user?.email);
  const [isSeller] = useIfSeller(user?.email);
  const [isBuyer] = useIfBuyer(user?.email);
    return (
        <div>
            {
              isAdmin && <AllSellers></AllSellers>
              
            }
            {
                isBuyer && <MyBookings></MyBookings>
            }
            {
                isSeller && <MyProducts></MyProducts>
            }
            
        </div>
    );
};

export default Dashboard;