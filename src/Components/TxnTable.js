import React from "react";
import { Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper } from '@mui/material';


const TxnTable = ({txnDatas}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Txn Hashes</TableCell>
            <TableCell align="right">from</TableCell>
            <TableCell align="right">to</TableCell>
            <TableCell align="right">value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {txnDatas.map((value,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{value.hash}</TableCell>
              <TableCell align="right">{value.from}</TableCell>
              <TableCell align="right">{value.to}</TableCell>
              <TableCell align="right">{value.value / 10e18 }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

export default TxnTable;