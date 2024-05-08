import { AppstoreOutlined } from '@ant-design/icons';
import { ReactComponent as FlowArrow } from 'assets/icons/FlowArrow.svg';
import { ReactComponent as Notifications } from 'assets/icons/Notifications.svg';
import { ReactComponent as RocketLaunch } from 'assets/icons/RocketLaunch.svg';
import { useMemo } from 'react';

export const useMenuItems = () => {
  return useMemo(
    () => [
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
    ],
    []
  );
};
