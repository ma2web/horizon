import { Select, Typography } from 'antd';
import { RocketType, SearchInputProps } from 'types';

interface Props extends SearchInputProps {}

const Filter = ({ setRockets, data }: Props) => {
  const handleFilter = (value: string) => {
    if (value === 'All') {
      setRockets(data?.rockets);
      return;
    }

    const result = data?.rockets?.filter(
      (rocket: RocketType) => rocket.country === value
    );

    setRockets(result);
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

export default Filter;

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
