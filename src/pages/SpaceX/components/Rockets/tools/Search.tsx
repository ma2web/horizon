import { CloseCircleOutlined } from '@ant-design/icons';
import { Input, InputRef, Tooltip } from 'antd';
import { ReactComponent as MagnifyingGlass } from 'assets/icons/MagnifyingGlass.svg';
import useDebounce from 'hooks/useDebounce';
import { memo, useEffect, useRef, useState } from 'react';
import { SearchInputProps } from 'types/types';
import { handleKeyDown, searchArrayByPropertyValue } from 'utils/functions';
import { useStyles } from '../../../SpaceX.styles';

const SearchInput = ({ setRockets, rockets, data }: SearchInputProps) => {
  const { classes } = useStyles();
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
        rockets,
        'name',
        debouncedSearchTerm
      );
      setRockets(result);
    } else {
      setRockets(data?.rockets);
    }
  }, [debouncedSearchTerm]);

  return (
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
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder='Start typing to search...'
        style={{ minWidth: 230 }}
        ref={searchInputRef}
      />
    </Tooltip>
  );
};

export default memo(SearchInput);
