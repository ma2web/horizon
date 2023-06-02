import { TabsProps } from 'antd';
import AppTabs from '../../components/tabs/AppTabs';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { useStyles } from './SpaceX.styles';
import Lounchpads from './components/Lounchpads';
import Rockets from './components/Rockets';

type Props = {};

const SpaceX = (props: Props) => {
  const { classes } = useStyles();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Rockets`,
      children: <Rockets />,
    },
    {
      key: '2',
      label: `Lounchpads`,
      children: <Lounchpads />,
    },
  ];

  return (
    <DashboardLayout title='SpaceX' hideHorizontalLine showHelpModal>
      <div className={classes.tabs}>
        <AppTabs items={items} />
      </div>
    </DashboardLayout>
  );
};

export default SpaceX;
