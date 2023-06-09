import { LinkOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Button, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';
import AppTable from '../../../../components/table/AppTable';
import { LOAD_LOUNCHPADS } from '../../../../graphql/operations/queries/lounchpads';
import { LounchpadType, RocketStatusType } from '../../../../types/types';
import { useStyles } from '../../SpaceX.styles';

type Props = {};

const Lounchpads = (props: Props) => {
  const { classes } = useStyles();
  const { data, loading, error } = useQuery(LOAD_LOUNCHPADS);

  const dataSource: LounchpadType[] = useMemo(
    () => data?.launchpads,
    [data?.launchpads]
  );
  const columns: ColumnsType<LounchpadType> = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => text,
        width: 250,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (wikipedia: string) => (
          <Tag
            color={RocketStatusType[wikipedia as keyof typeof RocketStatusType]}
          >
            {wikipedia}
          </Tag>
        ),
      },
      {
        title: 'Wikipedia',
        key: 'wikipedia',
        dataIndex: 'wikipedia',
        render: (wikipedia: string) => (
          <Button href={wikipedia} target='_blank'>
            <LinkOutlined />
          </Button>
        ),
      },
    ],
    []
  );

  if (error) return <p>GraphQL query error: {error.message}</p>;

  return (
    <div className={classes.root}>
      <div className={classes.table}>
        <AppTable columns={columns} dataSource={dataSource} loading={loading} />
      </div>
    </div>
  );
};

export default Lounchpads;
