import type { TabsProps } from 'antd';
import { Tabs } from 'antd';

type Props = {
  items: TabsProps['items'];
};
const AppTabs = ({ items }: Props) => {
  return <Tabs defaultActiveKey='1' items={items} />;
};

export default AppTabs;
