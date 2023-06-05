import React from 'react';
import { FaBars, FaBook, FaCalendarAlt, FaEnvelope, FaHome, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data.
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* <*-- Page content here --*> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {/* <!-- Sidebar content here --> */}


                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> ADMIN HOME</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> ADD AN ITEM</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><FaWallet></FaWallet> MANAGE ITEMS</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaBook></FaBook> MANAGE BOOKING</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> ALL USERS</NavLink></li>

                            </>

                            :
                            <>
                                <li><NavLink to='/dashboard/userhome'><FaHome></FaHome> USER HOME</NavLink></li>
                                <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> RESERVATION</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> PAYMENT HISTORY</NavLink></li>
                                <li className='indicator'>
                                    <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>MY CART <span className="badge badge-primary indicator-item">+{cart?.length || 0}</span></NavLink>
                                </li>
                            </>
                    }


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