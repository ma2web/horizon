import { useQuery } from '@apollo/client';
import { Button, Space, Tag, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ReactComponent as PencilCircle } from 'assets/icons/PencilCircle.svg';
import { ReactComponent as Trash } from 'assets/icons/Trash.svg';
import AppTable from 'components/table/AppTable';
import { LOAD_ROCKETS } from 'graphql/operations/queries/rockets';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { CountryColor, RocketType } from 'types/types';
import { useStyles } from '../../SpaceX.styles';
import Filter from './tools/Filter';
import SearchInput from './tools/Search';

type Props = {};

const Rockets = (props: Props) => {
  const { classes } = useStyles();
  const { data, loading, error } = useQuery(LOAD_ROCKETS);
  const [rockets, setRockets] = useState<RocketType[]>(data?.rockets);

  const dataSource: RocketType[] = useMemo(() => rockets, [rockets]);
  const columns: ColumnsType<RocketType> = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => text,
        width: 250,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        render: (description: string) => (
          <Typography.Paragraph>{description}</Typography.Paragraph>
        ),
      },
      {
        title: 'Country',
        key: 'country',
        dataIndex: 'country',
        render: (country: string) => (
          <Tag color={CountryColor[country as keyof typeof CountryColor]}>
            {country}
          </Tag>
        ),
      },
      {
        title: '',
        key: 'action',
        render: (_: ReactNode) => (
          <Space>
            <Button className={classes.button} icon={<PencilCircle />} href='#'>
              Open & Edit
            </Button>
            <Button className={classes.button} icon={<Trash />} href='#' />{' '}
          </Space>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    if (data?.rockets.length > 0) {
      setRockets(data?.rockets);
    }
  }, [data]);

  if (error) return <p>GraphQL query error: {error.message}</p>;
  return (
    <div>
      <div className={classes.tools}>
        <div className={classes.filter}>
          <Filter rockets={rockets} setRockets={setRockets} data={data} />
        </div>
        <div className={classes.search}>
          <SearchInput rockets={rockets} setRockets={setRockets} data={data} />
        </div>
      </div>
      <div className={classes.table}>
        <AppTable columns={columns} dataSource={dataSource} loading={loading} />
      </div>
    </div>
  );
};

export default Rockets;
