import { CloseCircleOutlined } from '@ant-design/icons';
import { Input, InputRef, Tooltip } from 'antd';
import { ReactComponent as MagnifyingGlass } from 'assets/icons/MagnifyingGlass.svg';
import { useDebounce } from 'hooks/use-debounce';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SearchInputProps } from 'types';
import { handleKeyDown, searchArrayByPropertyValue } from 'utils/functions';
import { useStyles } from '../../../styles';

const SearchInput = ({ setRockets, rockets, data }: SearchInputProps) => {
  const { classes } = useStyles();
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 500);
  const searchInputRef = useRef<InputRef>(null);

  const handleClear = useCallback(() => {
    setSearch('');
    setRockets(data?.rockets);
  }, [data?.rockets, setRockets]);

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
      handleClear();
    }
  }, [debouncedSearchTerm, handleClear, rockets, setRockets]);

  return (
    <Tooltip title='Press ⌘ + F'>
      <Input
        prefix={<MagnifyingGlass />}
        suffix={
          search && (
            <div className={classes.resetSearchIcon} onClick={handleClear}>
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

export default SearchInput;
