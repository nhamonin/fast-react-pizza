import { useLoaderData } from 'react-router-dom';

import { MenuItem as IMenuItem } from '../../types/MenuItem';
import MenuItem from './MenuItem';
import { getMenu } from '../../services/apiRestaurant';

function Menu() {
  const menu = useLoaderData() as IMenuItem[];

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
