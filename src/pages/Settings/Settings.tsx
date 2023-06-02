import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { useStyles } from './Settings.styles';

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
