import { Link } from 'react-router-dom';

import './Header.css';

// const HeaderLink = ({ page }) => {
//   const title = page.charAt(0).toUpperCase() + page.slice(1);

//   return <Link to={`/${page}`} className='Headerlink-title'>{title}</Link>;
// };

const Header = (props) => {
    let menuArray = props.nav;

    return (
        <div className='Header'>
            <nav>
                <ul>
                    {menuArray.map((menuItem) => (
                        <li key={menuItem.name}><a href={menuItem.path}>{menuItem.name}</a></li>
                    ))}

                </ul>
            </nav>
        </div>
    );
};
  
  export default Header;