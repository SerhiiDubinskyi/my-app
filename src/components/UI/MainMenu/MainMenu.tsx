import MainMenuItem, {IMenuItems} from './MenuItem';
import './MainMenu.css';

export default function MainMenu({menuItems}: {menuItems: IMenuItems}) {

  return (
    <ul className='Menu'>
        {menuItems.components.map((menuItem, index) => (
        <MainMenuItem key={index} itemProps={menuItem} />
        ))}
    </ul>
  );
}
