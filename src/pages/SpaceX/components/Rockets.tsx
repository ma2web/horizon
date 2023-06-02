/* eslint-disable react-hooks/exhaustive-deps */
import { CloseCircleOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import {
  Button,
  Input,
  InputRef,
  Select,
  Space,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { ReactComponent as MagnifyingGlass } from '../../../assets/icons/MagnifyingGlass.svg';
import { ReactComponent as PencilCircle } from '../../../assets/icons/PencilCircle.svg';
import { ReactComponent as Trash } from '../../../assets/icons/Trash.svg';
import AppTable from '../../../components/table/AppTable';
import { LOAD_ROCKETS } from '../../../graphql/operations/queries/rockets';
import useDebounce from '../../../hooks/useDebounce';
import { CountryColor, RocketType } from '../../../types/types';
import {
  handleKeyDown,
  searchArrayByPropertyValue,
} from '../../../utils/functions';
import { useStyles } from '../SpaceX.styles';

type Props = {};

const Rockets = (props: Props) => {
  const { classes } = useStyles();
  const { data, loading, error } = useQuery(LOAD_ROCKETS);
  const [rockets, setRockets] = useState<RocketType[]>([]);
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 500);
  const searchInputRef = useRef<InputRef>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      handleKeyDown(event, 'f', () => searchInputRef.current?.focus());
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const result = searchArrayByPropertyValue(
        data?.rockets,
        'name',
        debouncedSearchTerm
      );
      setRockets(result);
    } else {
      setRockets(data?.rockets);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setRockets(data?.rockets);
  }, [data]);

  const dataSource: RocketType[] = rockets;
  const columns: ColumnsType<RocketType> = [
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
  ];

  const filterOptions = [
    {
      value: 'All',
      label: 'All',
    },
    {
      value: 'Republic of the Marshall Islands',
      label: 'Republic of the Marshall Islands',
    },
    { value: 'United States', label: 'United States' },
  ];

  const handleFilter = (value: string) => {
    if (value === 'All') {
      setRockets(data?.rockets);
      return;
    }

    const filteredList = data?.rockets?.filter(
      (rocket: RocketType) => rocket.country === value
    );

    setRockets(filteredList);
  };

  if (error) return <p>GraphQL query error: {error.message}</p>;

  return (
    <div>
      <div className={classes.tools}>
        <div className={classes.filter}>
          <Typography.Text>Country:</Typography.Text>
          <Select
            placeholder='Select country to filter...'
            onChange={handleFilter}
            options={filterOptions}
            style={{ minWidth: 130 }}
          />
        </div>
        <div className={classes.search}>
          <Tooltip title='Press ⌘ + F'>
            <Input
              prefix={<MagnifyingGlass />}
              suffix={
                search && (
                  <div
                    className={classes.resetSearchIcon}
                    onClick={() => setSearch('')}
                  >
                    <CloseCircleOutlined />
                  </div>
                )
              }
              onChange={(e) => {
                const { value } = e.target;
                setSearch(value);
              }}
              value={search}
              placeholder='Start typing to search...'
              style={{ minWidth: 230 }}
              ref={searchInputRef}
            />
          </Tooltip>
        </div>
      </div>
      <div className={classes.table}>
        <AppTable columns={columns} dataSource={dataSource} loading={loading} />
      </div>
    </div>
  );
};

export default Rockets;
