import React from 'react'

/* Import Components Bootstrap */
import { Table as TableBootstrap } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

/* Import Table */

import {
  useTable,
  usePagination,
  useSortBy,
  useExpanded,
  useRowSelect,
} from 'react-table'

/* Icons */
import { FaRegWindowRestore, FaFilter } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


/* Styles */
import styled from 'styled-components'
import './gnomes.css'
import { GnomeFilter } from './gnomeFilter/gnomeFilter';



const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    td {
      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
  .img-thumbnail{
    height: 100px;

    width: 100px;
  }

  input[type=number]{
    width: 120px !important;
  }

`


function Table({ columns, data, updateMyData, params }) {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      updateMyData,

    },
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  )

  // Render the UI 
  return (
    <>
     
      <div className='filterGnomeDesktop'>
        <GnomeFilter />
      </div>

      <div className="buttonsHeader">
        <div className="divButtonFilter">
          <Button
            variant="outline-secondary"
            className="buttonDetails"
            size="sm"
            data-placement="left"
            title="Filter Gnomes ..."
            onClick={() => params.onClickFilter()}
          >
            <FaFilter className="iconFilter" />
          </Button>
        </div>




        <div id="pageSize">
          {/* Select of Row per page */}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[5, 10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select> entries
      </div>
      </div>




      <TableBootstrap {...getTableProps()} responsive striped hover >

        <thead className="thead-dark">
          {headerGroups.map(headerGroup => (

            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (

                <th {...column.getHeaderProps()}>
                  <div>

                    <span {...column.getSortByToggleProps()}>
                      {column.render('Header')}

                      {/* Add a sort direction indicator */}
                      {column.Header !== 'Details' && column.Header !== 'Avatar' ?
                        column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : <> <IoIosArrowDown /> <IoIosArrowUp /></>
                        : ''
                      }

                    </span>
                  </div>
                </th>

              ))}
            </tr>

          ))}
        </thead>

        <tbody {...getTableBodyProps()}  >
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className={cell.column.id}>
                      {cell.render('Cell', { editable: false })}

                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>

      </TableBootstrap>

      <div className="pagination">
        <div id="paginationButton">

          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
        </div>

        <div id="paginationGoTo">

          <span>
            Go to page:{' '}
            <input
              id="pageNumber"
              type="number"
              value={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
            />
          </span>{' '}
        </div>
        <div id="paginationPage">
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
        </div>
      </div>


    </>
  )
}

function Gnomes(params) {




  const columns = React.useMemo(
    () => [
      {
        id: 'city',
        Header: 'City',
        accessor: 'city',
      },
      {
        id: 'name',
        Header: 'Name',
        accessor: 'name',
      },
      {

        id: 'avatar',
        Header: 'Avatar',
        Cell: ({ row }) => (
          <img className="imageTable img-thumbnail" src={row.original.thumbnail} alt="Avatar" />

        ),

      },

      {

        id: 'age',
        Header: 'Age',
        accessor: 'age',

      },
      {
        id: 'weight',
        Header: 'Weight',
        accessor: 'weight',

      },
      {
        id: 'height',
        Header: 'Height',
        accessor: 'height',
      },
      {

        id: 'gender',
        Header: 'Gender',
        accessor: 'gender',
      },

      {

        id: 'details',
        Header: 'Details',
        Cell: ({ row }) => (
          <Button
            variant="outline-secondary"
            className="buttonDetails"
            size="sm"
            data-placement="left"
            title="More Information ..."
            onClick={() => params.onClick(row)}
          >
            <FaRegWindowRestore className="iconDetails" />
          </Button>
        ),

      },

    ],
    [params]
  )

  const [data, setData] = React.useState(() => params.gnomes)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.
  const skipPageResetRef = React.useRef(false)

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    skipPageResetRef.current = true
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          }
        }
        return row
      })
    )
  }




  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageResetRef.current}
        params={params}
      />
    </Styles>
  )
}

export default Gnomes
