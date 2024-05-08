import { TabsProps } from 'antd';
import { Tabs } from 'components/tabs';
import DashboardLayout from 'layouts/dashboard-layout';
import Lounchpads from './components/lounch-pads';
import Rockets from './components/rockets';
import { useStyles } from './styles';

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

  console.log('Hello, world!');
  return (
    <DashboardLayout title='SpaceX' hideHorizontalLine showHelpModal>
      <div className={classes.tabs}>
        <Tabs items={items} />
      </div>
    </DashboardLayout>
  );
};

export default SpaceX;
