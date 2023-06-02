import { AppstoreOutlined } from '@ant-design/icons';
import { Badge, Typography } from 'antd';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as FlowArrow } from '../../assets/icons/FlowArrow.svg';
import { ReactComponent as Notifications } from '../../assets/icons/Notifications.svg';
import { ReactComponent as RocketLaunch } from '../../assets/icons/RocketLaunch.svg';
import { ReactComponent as Storefront } from '../../assets/icons/Storefront.svg';
import SearchModal from '../../components/modals/searchModal/SearchModal';
import { Store } from '../../store/Store';
import { toggleSidebar } from '../../store/actions';
import { useStyles } from './DashboardLayout.styles';

const Sidebar: React.FC = () => {
  const { classes } = useStyles({ hideHorizontalLine: false });
  const { dispatch, state } = useContext(Store);
  const groups = [
    {
      id: 'GROUP_1',
      name: 'GENERAL',
      items: [
        {
          id: 'GROUP_1_1',
          name: 'Overview',
          route: '/',
          icon: <AppstoreOutlined />,
        },
        {
          id: 'GROUP_1_1',
          name: 'Notifications',
          icon: <Notifications />,
          route: '/notifications',
          badge: 3,
        },
      ],
    },
    {
      id: 'GROUP_2',
      name: 'SPACE STUFF',
      items: [
        {
          id: 'GROUP_2_1',
          name: 'SpaceX',
          icon: <RocketLaunch />,
          route: '/spacex',
        },
        {
          id: 'GROUP_2_1',
          name: 'Another menu',
          icon: <FlowArrow />,
          route: '/settings',
        },
      ],
    },
  ];

  console.log(state.toggleSidebar);
  return (
    <div className={classes.sidebarContainer}>
      {/* Logo */}
      <div className={classes.logoContainer}>
        <div
          className={classes.logo}
          onClick={() => toggleSidebar(!state.toggleSidebar, dispatch)}
        >
          <Storefront />
        </div>
        <div className={classes.logoText}>
          <Typography.Text strong>Horizon</Typography.Text>
          <Typography.Text>
            <div className={classes.span}>/ Acme Corporation</div>
          </Typography.Text>
        </div>
      </div>
      {/* Search */}
      <div className={classes.search}>
        <SearchModal />
      </div>
      {/* Menu Items */}
      <div className={classes.menuItems}>
        {groups.map((group) => (
          <div className={classes.group} key={group.id}>
            <div className={classes.groupName}>
              <Typography.Text>{group.name}</Typography.Text>
            </div>
            {group.items.map((item) => (
              <div className={classes.item} key={item.id}>
                <NavLink to={item.route}>
                  <div className={classes.itemName}>
                    {item.icon}
                    <Typography.Text>{item.name}</Typography.Text>
                  </div>
                  <div>{item.badge && <Badge count={3} />}</div>
                </NavLink>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
