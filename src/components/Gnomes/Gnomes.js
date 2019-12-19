import React from "react";
import { useState } from "react";

/* Import Components Bootstrap */
import { Button } from "react-bootstrap";
import { Table } from "./TableGnomes";
/* Icons */
import { FaRegWindowRestore } from "react-icons/fa";

/* Styles */
import styled from "styled-components";
import "./Gnomes.scss";

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
  .img-thumbnail {
    height: 100px;

    width: 100px;
  }
`;

export function Gnomes(params) {
  /* Declare columns of my table of Gnomes */
  const columns = React.useMemo(
    () => [
      {
        id: "city",
        Header: "City",
        accessor: "city"
      },
      {
        id: "name",
        Header: "Name",
        accessor: "name"
      },
      {
        id: "avatar",
        Header: "Avatar",
        Cell: ({ row }) => (
          <img
            className="imageTable img-thumbnail"
            src={row.original.thumbnail}
            alt="Avatar"
          />
        )
      },

      {
        id: "age",
        Header: "Age",
        accessor: "age"
      },
      {
        id: "weight",
        Header: "Weight",
        accessor: "weight"
      },
      {
        id: "height",
        Header: "Height",
        accessor: "height"
      },
      {
        id: "gender",
        Header: "Gender",
        accessor: "gender"
      },

      {
        id: "details",
        Header: "Details",
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
        )
      }
    ],
    [params]
  );

  /* I use this because if I use the state Gnome 
  with useSelector when I applied the filter on gnome, I lost the data or I can  duplicate the object in my redux 
  but I decide use online a gnome in state and set in the table since gnomeFilter with useState */

  const [data, setData] = useState([]);
  return (
    <Styles>
      <Table columns={columns} data={data} setData={setData} />
    </Styles>
  );
}
