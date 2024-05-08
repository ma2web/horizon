import HelpModal from 'components/modals/help';
import { Typography } from 'components/typography';
import { ReactNode } from 'react';
import Sidebar from './components/sidebar';
import { useStyles } from './styles';

type Props = {
  children: ReactNode;
  title?: string;
  hideHorizontalLine?: boolean;
  showHelpModal?: boolean;
};

const DashboardLayout = ({
  hideHorizontalLine = false,
  title,
  showHelpModal,
  children,
}: Props) => {
  const { classes } = useStyles({ hideHorizontalLine });

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography isTitle level={2}>
            {title}
          </Typography>
          {showHelpModal && <HelpModal />}
        </div>
        <div className={classes.children}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
