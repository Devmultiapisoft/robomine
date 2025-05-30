import CommonDatatable from 'helpers/CommonDatatable'
import ExportCSV from 'myComponents/ExportCSV';
import { useMemo } from 'react';

export default function ROI() {

  const apiPoint = 'get-all-incomes'

  const columns = useMemo(
    () => [
      {
        header: 'User ID',
        accessorKey: 'user_id'
      },
      {
        header: 'Media Type',
        accessorKey: 'extra.mediaType',
        cell: (props) => {
          return props.getValue()
        },
      },
      {
        header: 'Tokens',
        accessorKey: 'amount'
      },
      {
        header: 'Date',
        accessorKey: 'created_at',
        // meta: { className: 'cell-right' }
        cell: (props) => {
          return new Date(props.getValue()).toLocaleString();
        },
        enableColumnFilter: false,
        enableGrouping: false
      }
    ],
    []
  );

  return <>
    <ExportCSV type={"income-type-0"} />
    <CommonDatatable columns={columns} apiPoint={apiPoint} type={1} />
  </>
}