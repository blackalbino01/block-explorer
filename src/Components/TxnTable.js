import React from "react";
import { Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress } from '@mui/material';


const TxnTable = ({txnDatas, isLoading}) => {

  const renderTable = () => {
    if(isLoading){
      return(
        <TableRow>
          <TableCell>
            <CircularProgress />
          </TableCell>
        </TableRow>
      );
    }

    const descOrder = txnDatas.sort((a, b) => Number(b.value) - Number(a.value));

    const populateData = descOrder.map((value,index) => {
      return (
        <TableRow key={index}
        sx= {{ '&:last-child td, &:last-child th': { border: 0 } }}>  
          <TableCell component="th" scope="row"> { value.hash} </TableCell>
          <TableCell align="left">{value.from}</TableCell>
          <TableCell align="left">{value.to}</TableCell>
          <TableCell align="left">{value.value / 10e18}</TableCell>
        </TableRow>
      );

    });

    return populateData;
  };

  return (
    <TableContainer sx={{ minWidth:400, mt: 8, mb: 6, overflow: 'auto'}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Txn Hashes</strong></TableCell>
            <TableCell align="center"><strong>From</strong></TableCell>
            <TableCell align="center"><strong>To</strong></TableCell>
            <TableCell align="center"><strong>Value(ether)</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            { renderTable() }
        </TableBody>
      </Table>
    </TableContainer>
  );

}

export default TxnTable;