import { Table as AntTable } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ReactNode } from 'react';
import { useStyles } from './styles';

interface Props {
  columns: ColumnsType<any>;
  dataSource: { key: string | number }[];
  loading?: boolean;
}

export function Table({ columns, dataSource, loading }: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.table}>
      <AntTable
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
}
