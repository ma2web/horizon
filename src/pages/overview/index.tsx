import DashboardLayout from 'layouts/dashboard-layout';
import { useStyles } from './styles';

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
