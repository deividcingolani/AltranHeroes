import React from "react";
import { GnomeFilter } from "../index";
import { useState } from "react";

/* Import Components Bootstrap */
import { Table as TableBootstrap } from "react-bootstrap";
import { Button } from "react-bootstrap";

/* Import Table */

import {
  useTable,
  usePagination,
  useSortBy,
  useExpanded,
  useRowSelect
} from "react-table";

/* Icons */
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import classes from "./GnomeFilter/ToggleFilter.module.css";

export function Table({ columns, data, setData }) {
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
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  /* This is for toogle Filter when the user use Mobile */
  const [showFormFilter, setShowFormFilter] = useState(false);

  let styleShowForm;
  if (showFormFilter) {
    styleShowForm = classes.Open;
  } else {
    styleShowForm = classes.Closed;
  }
  return (
    <>
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
            onClick={() => setShowFormFilter(!showFormFilter)}
          >
            <FaFilter className="iconFilter" />
          </Button>
        </div>

        {/* Select of Row per page */}
        <div id="pageSize">
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>{" "}
          entries
        </div>
      </div>
      <div className={styleShowForm}>
        <GnomeFilter setData={setData} />
      </div>
      {/* Render Table of Gnomes */}
      <TableBootstrap {...getTableProps()} responsive striped hover>
        <thead className="thead-dark">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  <div>
                    <span {...column.getSortByToggleProps()}>
                      {column.render("Header")}

                      {/* Add a sort direction indicator */}
                      {column.Header !== "Details" &&
                      column.Header !== "Avatar" ? (
                        column.isSorted ? (
                          column.isSortedDesc ? (
                            " 🔽"
                          ) : (
                            " 🔼"
                          )
                        ) : (
                          <>
                            {" "}
                            <IoIosArrowDown /> <IoIosArrowUp />
                          </>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className={cell.column.id}>
                      {cell.render("Cell", { editable: false })}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableBootstrap>

      {/* Pagination and Page Number */}
      <div className="pagination">
        <div id="paginationButton">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
        </div>

        <div id="paginationGoTo">
          <span>
            Go to page:{" "}
            <input
              id="pageNumber"
              type="number"
              value={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
          </span>{" "}
        </div>
        <div id="paginationPage">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </div>
      </div>
    </>
  );
}
