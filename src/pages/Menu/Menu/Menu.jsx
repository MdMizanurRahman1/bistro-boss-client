import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';




const Menu = () => {

    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const desserts = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title='our menu'></Cover>
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
            {/* offered Item */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert Item */}
            <MenuCategory items={desserts} title='Dessert' img={dessertImg}></MenuCategory>
            {/* Pizaa */}
            <MenuCategory items={pizza} title='Pizza' img={pizzaImg}></MenuCategory>

            <MenuCategory items={salad} title='Salads' img={saladImg}></MenuCategory>

            <MenuCategory items={soup} title='Soups' img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;