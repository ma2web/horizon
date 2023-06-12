import { useQuery } from '@apollo/client';
import { Button, Input, InputRef, Modal, Space, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ReactComponent as MagnifyingGlass } from 'assets/icons/MagnifyingGlass.svg';
import { ReactComponent as MagnifyingGlassFilled } from 'assets/icons/MagnifyingGlassFilled.svg';
import { ReactComponent as PencilCircle } from 'assets/icons/PencilCircle.svg';
import { ReactComponent as Trash } from 'assets/icons/Trash.svg';
import AppTable from 'components/table/AppTable';
import AppTypography from 'components/typography/AppTypography';
import { LOAD_ROCKETS } from 'graphql/operations/queries/rockets';
import useDebounce from 'hooks/useDebounce';
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Store } from 'store/Store';
import { toggleModal } from 'store/actions/GlobalSearch';
import { CountryColor, RocketType } from 'types/types';
import { handleKeyDown, searchArrayByPropertyValue } from 'utils/functions';
import { useStyles } from './SearchModal.styles';

const SearchModal: React.FC = () => {
  const mainInputRef = useRef<InputRef>(null);
  const { data } = useQuery(LOAD_ROCKETS);
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 500);
  const [rockets, setRockets] = useState<RocketType[]>([]);
  const [showNoData, setShowNoData] = useState<boolean>(false);
  const { classes } = useStyles({ hideHorizontalLine: false });
  const { state, dispatch } = useContext(Store);
  const toggleShowModal = useCallback(
    () => toggleModal(state.globarSearch.toggleModal, dispatch),
    [dispatch, state]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      handleKeyDown(event, 'k', toggleShowModal);
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleShowModal]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const result = searchArrayByPropertyValue(
        data?.rockets,
        'name',
        debouncedSearchTerm
      );
      setRockets(result);

      if (!result.length) {
        setShowNoData(true);
      } else {
        setShowNoData(false);
      }
    } else {
      setRockets([]);
      setShowNoData(false);
    }
  }, [debouncedSearchTerm, data?.rockets, toggleShowModal]);

  useEffect(() => {
    if (state.globarSearch.toggleModal && mainInputRef.current) {
      mainInputRef.current.focus();
    }
  }, [state.globarSearch.toggleModal]);

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
          <Button className={classes.button} icon={<PencilCircle />} href='#' />
          <Button className={classes.button} icon={<Trash />} href='#' />{' '}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Input
        className={classes.searchInput}
        prefix={<MagnifyingGlass />}
        suffix={
          <div className={classes.searchShortKey}>
            <Tooltip title='Press ⌘ + K to opening the global search modal'>
              ⌘ K
            </Tooltip>
          </div>
        }
        onClick={toggleShowModal}
        onBeforeInput={toggleShowModal}
        value=''
        placeholder='Quick find'
      />

      <Modal
        open={state.globarSearch.toggleModal}
        onOk={toggleShowModal}
        onCancel={toggleShowModal}
        footer={false}
        closable={false}
        className={classes.searchModal}
      >
        <Input
          prefix={<MagnifyingGlassFilled />}
          onChange={(e) => {
            const { value } = e.target;
            setSearch(value);
          }}
          value={search}
          ref={mainInputRef}
          className={classes.searchModalInput}
          placeholder='Start typing to search...'
        />
        {dataSource.length > 0 && (
          <div className={classes.searchModalTable}>
            <AppTable
              dataSource={dataSource.map((item) => ({ ...item, key: item.id }))}
              columns={columns.map((item) => ({ ...item, key: item.key }))}
            />
          </div>
        )}
        {showNoData && (
          <div className={classes.searchModalNoData}>
            <AppTypography>No Records Found!</AppTypography>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SearchModal;
