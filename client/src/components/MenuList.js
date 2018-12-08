import React from 'react';
import Menu from './Menu';

const MenuList = ({ menus }) => (
<div>
    { menus.map( menu => 
        <Menu
          key={menu.id} {...menu}
          menuName = { menu.name }
        />
      )
    }
</div>
)

export default MenuList;