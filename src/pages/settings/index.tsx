import DashboardLayout from 'layouts/dashboard-layout';
import { useStyles } from './styles';

type Props = {};

const Settings = (props: Props) => {
  const { classes } = useStyles();
  return (
    <DashboardLayout title='Settings'>
      <div className={classes.root}></div>
    </DashboardLayout>
  );
};

export default Settings;
