import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import Table from "@ingka/table";
import { TableHeader, TableBody } from "@ingka/table";
import "./table.styles.scss";

import "@ingka/table/style.scss";

//import sampleData from "../../data";
import COLUMN from "./column";

const DataTable = () => {
  const marketData = useSelector((state) => state.fetchAll.marketData);
  //table component
  const [data, setData] = useState(marketData);
  const [column, setColumn] = useState(COLUMN);
  console.log(data);

  return (
    <div className="table-container">
      <div className="container-2">
        <p>CRIP API response</p>
        <div>
          <button
            aria-disabled="false"
            type="submit"
            className="btn btn--small btn--primary"
          >
            <span className="btn__inner">
              <span className="btn__label">Reference</span>
            </span>
          </button>
        </div>
      </div>
      <Table>
        <TableHeader sticky={true}>
          <tr>
            {column.map((head, id) => (
              <th key={id} className="thead">
                {head.Header}
              </th>
            ))}
          </tr>
        </TableHeader>
        <TableBody>
          {data.map((row, id) => (
            <tr key={id}>
              {column.map((col, id) => (
                <td key={id}>{row[col.feild]}</td>
              ))}
            </tr>
          ))}
        </TableBody>
      </Table>
      {/* <table>
        <thead>
          <tr>
            {column.map((head) => (
              <th>{getCaps(head.feild)}</th>
            ))}
          </tr>
        </thead>
          <tbody>
            {data.map((row) => (
              <tr>
                {column.map((col) => (
                  <td>{row[col.feild]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data ? null : <p>No Row to show</p>} */}
    </div>
  );
};

export default DataTable;
