import DashboardLayout from 'layouts/DashboardLayout/DashboardLayout';
import { useStyles } from './Notifications.styles';

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
