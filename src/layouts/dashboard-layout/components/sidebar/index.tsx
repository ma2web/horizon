import { Typography } from 'antd';

import { ReactComponent as Storefront } from 'assets/icons/Storefront.svg';
import SearchModal from 'components/modals/search';
import React, { memo } from 'react';
import { useStyles } from '../../styles';
import { MenuItem } from '../menu-items';

const Sidebar: React.FC = () => {
  const { classes } = useStyles({
    hideHorizontalLine: false,
  });

  return (
    <div className={classes.sidebarContainer}>
      {/* Logo */}
      <div className={classes.logoContainer}>
        <div className={classes.logo}>
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
      <MenuItem />
    </div>
  );
};

export default memo(Sidebar);
