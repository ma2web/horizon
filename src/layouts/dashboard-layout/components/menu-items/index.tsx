import { Badge } from 'antd';
import { Typography } from 'components/typography';
import { useMenuItems } from 'layouts/dashboard-layout/hooks/use-menu-items';
import { NavLink } from 'react-router-dom';
import { useStyles } from '../../styles';

export const MenuItem = () => {
  const { classes } = useStyles({});

  const menuItems = useMenuItems();

  return (
    <div className={classes.menuItems}>
      {menuItems.map((menu, index) => (
        <div className={classes.group} key={index}>
          <div className={classes.groupName}>
            <Typography>{menu.name}</Typography>
          </div>
          {menu.items.map((item, idx) => (
            <div className={classes.item} key={idx}>
              <NavLink to={item.route}>
                <div className={classes.itemName}>
                  {item.icon}
                  <Typography>{item.name}</Typography>
                </div>
                {item.badge && (
                  <div>
                    <Badge count={item.badge} />
                  </div>
                )}
              </NavLink>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
