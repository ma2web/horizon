import { Select, Typography } from 'antd';
import { memo } from 'react';
import { RocketType } from 'types/types';

type Props = {
  setRockets: (data: RocketType[]) => void;
  data: {
    rockets: RocketType[];
  };
};

const Filter = ({ data, setRockets }: Props) => {
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

  return (
    <>
      <Typography.Text>Country:</Typography.Text>
      <Select
        placeholder='Select country to filter...'
        onChange={handleFilter}
        options={filterOptions}
        style={{ minWidth: 130 }}
      />
    </>
  );
};

export default memo(Filter);

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
