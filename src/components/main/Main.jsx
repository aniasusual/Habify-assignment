import React from 'react'
import "./main.scss"
import DataTable from 'react-data-table-component';
import { BsCcCircleFill, BsPinFill } from 'react-icons/bs';

import homeData from "../../data/homeData";
import { columns } from "../../data/homeData"

import { useTable } from "react-table";
import { Link } from 'react-router-dom';

import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import styled from "@emotion/styled";

const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: white;
  }
  &:nth-of-type(even) {
    background-color: gray;
  }
  & > TableCell {
    color: white;
  }
`;

const Main = () => {

    const data = React.useMemo(() => homeData, []);
    const columns = React.useMemo(() => [
        {
            Header: "Topic",
            accessor: "Topic",
        },
        {
            Header: "Category",
            accessor: "Category",
        },
        {
            Header: "Users",
            accessor: "Users",
        },
        {
            Header: "Replies",
            accessor: "Replies",
        },
        {
            Header: "Views",
            accessor: "Views",
        },
        {
            Header: "Activity",
            accessor: "Activity",
        }
    ], []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    return (
        <div id="mainCon">
            <div className="container">
                <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map((headerGroup) => (
                            <TableRowStyled {...headerGroup.getFooterGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </TableRowStyled>
                        ))}
                    </TableHead>

                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                    <TableRowStyled {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <TableCell {...cell.getCellProps()}> {cell.render("Cell")}</TableCell>
                                        ))}
                                    </TableRowStyled>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>


        </div>
    )
}

export default Main
