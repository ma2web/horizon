import type { TabsProps } from 'antd';
import { Tabs as AntTabs } from 'antd';

type Props = {
  items: TabsProps['items'];
};

export function Tabs({ items }: Props) {
  return <AntTabs defaultActiveKey='1' items={items} />;
}
