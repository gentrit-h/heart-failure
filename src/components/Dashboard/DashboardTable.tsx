/* eslint-disable */
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { GetProp, TableProps } from 'antd';
import { Space, Table } from 'antd';
import styled from '@emotion/styled';

type SizeType = TableProps['size'];
type ColumnsType<T extends object> = GetProp<TableProps<T>, 'columns'>;
type TableRowSelection<T extends object> = TableProps<T>['rowSelection'];

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  description: string;
}

const StyledTable = styled(Table)`
  .ant-table-header {
    height: 44px;
    border-color: #EAECF0;
    background: #F9FAFB;
  }

  .ant-table-cell ant-table-column-has-sorters {
  &before {
    display: none;
  }
  }
`;

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];

const data = Array.from({ length: 10 }).map<DataType>((_, i) => ({
  key: i,
  name: 'John Brown',
  age: Number(`${i}2`),
  address: `New York No. ${i} Lake Park`,
  description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
}));
const DashboardTable: React.FC = () => {
  const [size, setSize] = useState<SizeType>('middle');
  const [rowSelection, setRowSelection] = useState<TableRowSelection<DataType> | undefined>({});
  setRowSelection({});
  setSize('middle')

  const tableColumns = columns.map((item) => ({ ...item }));

  const tableProps: any = {
    bordered: false,
    size,
    rowSelection
  };

  return (
    <>
      <StyledTable
        {...tableProps}
        pagination={{ position: ['bottomRight'] }}
        columns={tableColumns}
        dataSource={data ? data : []}
        scroll={{ y: 240 }}
      />
    </>
  );
};

export default DashboardTable;