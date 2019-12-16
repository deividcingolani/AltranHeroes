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
import { useState } from 'react';
import useQueryString from "../../useQueryString";
import { Tabs, Tab } from "react-bootstrap";



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


`


function Table({ columns, data, skipReset, resetData, params }) {

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
      // We also need to pass this so the page doesn't change
      // when we edit the data.
      autoResetPage: !skipReset,
      autoResetSelectedRows: !skipReset,

    },
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  )

  const [showFormFilter, setShowFormFilter] = useState(false);
  const [dataForm, setDataForm] = useState(data);
  const [valuePage, onSetValuePage] = useQueryString("page");

  const onClickFilter = () => {
    setShowFormFilter(!showFormFilter)
  }


  /* Clicks of Pagination */
  const onClickgotoPage = (value) => {
    gotoPage(value)
    onSetValuePage(value + 1)
  }

  const onClickpreviousPage = () => {
    onSetValuePage(pageIndex + 2)

    previousPage()

  }

  const onClicknextPage = () => {

    onSetValuePage(pageIndex + 2)

    nextPage()
  }



  return (
    <>
      <Tabs activeKey={valuePage} onSelect={onSetValuePage}>
        <Tab eventKey="1" title="a" />
        <Tab eventKey="2" title="b" />
        <Tab eventKey="3" title="c" />
      </Tabs>

      <div className="buttonsHeader">
        <div className="resultsGnomes">Results: {data.length}</div>
        {/* For mobile, toggle Table Filter of Gnome */}
        <div className="divButtonFilter">
          <Button
            variant="outline-secondary"
            className="buttonDetails"
            size="sm"
            data-placement="left"
            title="Filter Gnomes ..."
            onClick={() => onClickFilter()}
          >
            <FaFilter className="iconFilter" />
          </Button>
        </div>



        {/* Select of Row per page */}
        <div id="pageSize">
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
      <div className='filterGnomeDesktop'>
        <GnomeFilter gnomes={dataForm}
          setGnomes={setDataForm}
          showFormFilter={showFormFilter}
          resetData={resetData}
          onClick={onClickFilter}
          paramsUrl={params.paramsUrl}
          gotoPage={gotoPage} />
      </div>
      {/* Render Table of Gnomes */}
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

      {/* Pagination and Page Number */}
      <div className="pagination">
        <div id="paginationButton">

          <button onClick={() => onClickgotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => onClickpreviousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => onClicknextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => onClickgotoPage(pageCount - 1)} disabled={!canNextPage}>
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

  /* Declare columns of my table of Gnomes */
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
  const skipResetRef = React.useRef(false)


  // After data chagnes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  React.useEffect(() => {
    skipResetRef.current = false
  }, [data])

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = (gnomes) => {
    // Don't reset the page when we do this
    skipResetRef.current = true
    setData(gnomes)
  }





  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        params={params}
        resetData={resetData}
        skipReset={skipResetRef.current}
      />
    </Styles>
  )
}

export default Gnomes
