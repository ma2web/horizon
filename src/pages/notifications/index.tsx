import DashboardLayout from 'layouts/dashboard-layout';
import { useStyles } from './styles';

type Props = {};

const Notifications = (props: Props) => {
  const { classes } = useStyles();
  return (
    <DashboardLayout title='Notifications'>
      <div className={classes.root}></div>
    </DashboardLayout>
  );
};

export default Notifications;
