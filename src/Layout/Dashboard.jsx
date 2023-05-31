import React from 'react';
import { FaBars, FaCalendarAlt, FaEnvelope, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <*-- Page content here --*> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome> USER HOME</NavLink></li>
                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> RESERVATION</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> PAYMENT HISTORY</NavLink></li>
                    <li className='indicator'>
                        <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>MY CART <span className="badge badge-primary indicator-item">+{cart?.length || 0}</span></NavLink>
                    </li>

                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome></FaHome> HOME</NavLink></li>
                    <li><NavLink><FaBars></FaBars> MENU</NavLink></li>
                    <li><NavLink><FaShoppingBag></FaShoppingBag> SHOP</NavLink></li>
                    <li><NavLink><FaEnvelope></FaEnvelope> CONTACT</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;