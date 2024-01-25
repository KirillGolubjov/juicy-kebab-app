import { useLoaderData } from 'react-router';
import { getMenu } from '../../services/apiCafe';
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (

    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((kebab) => (<MenuItem kebab={kebab} key={kebab.id} />))}
    </ul>

  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu
