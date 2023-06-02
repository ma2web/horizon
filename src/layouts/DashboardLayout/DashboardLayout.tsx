import { ReactNode } from 'react';
import HelpModal from '../../components/modals/helpModal/HelpModal';
import AppTypography from '../../components/typography/AppTypography';
import { useStyles } from './DashboardLayout.styles';
import Sidebar from './Sidebar';

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
          <AppTypography isTitle level={2}>
            {title}
          </AppTypography>
          {showHelpModal && <HelpModal />}
        </div>
        <div className={classes.children}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
