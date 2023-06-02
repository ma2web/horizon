import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ReactNode } from 'react';
import { useStyles } from './AppTable.styles';

const AppTable = ({
  columns,
  dataSource,
  loading,
}: {
  columns: ColumnsType<any>;
  dataSource: {}[];
  loading?: boolean;
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.table}>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        loading={loading}
        size='middle'
        components={{
          header: {
            cell: ({ children }: { children: ReactNode }) => (
              <th className={classes.th}>{children}</th>
            ),
          },
          body: {
            cell: ({ children }: { children: ReactNode }) => (
              <td className={classes.td}>{children}</td>
            ),
          },
        }}
      />
    </div>
  );
};

export default AppTable;
