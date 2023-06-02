import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { useStyles } from './Overview.styles';

type Props = {};

const Overview = (props: Props) => {
  const { classes } = useStyles();
  return (
    <DashboardLayout title='Overview'>
      <div className={classes.root}></div>
    </DashboardLayout>
  );
};

export default Overview;
