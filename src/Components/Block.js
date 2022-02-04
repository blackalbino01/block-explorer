import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { styled } from '@mui/material/styles';
import TxnTable from './TxnTable.js';
import { Button, 
  Stack, 
  Paper,
  CssBaseline,
  Container } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  width: 500,
  color: theme.palette.text.primary,
}));

const Block = () => {
  const web3 = new Web3('https://nodeapi.energi.network');
  const [ blockNo, setBlockNo] = useState(null);
  const [ noTxn, setNoTxn] = useState(null);
  const [ miner, setMiner] = useState('');
  const [ totalDifficulty, setTotalDifficulty] = useState(null);
  const [ txns, setTxns] = useState([]);
  
   
  const getBlock = async () => {
    const block = await web3.eth.getBlock('latest');
    const txnCount = await web3.eth.getBlockTransactionCount(block.hash);
    setBlockNo(block.number);
    setNoTxn(txnCount);
    setMiner(block.miner);
    setTotalDifficulty(block.totalDifficulty);


    const arr = [];

    for(let i = 0; i < txnCount; i++){
      const txn = await web3.eth.getTransaction(block.transactions[i]);
      arr.push(txn);
    }

    setTxns(...txns,arr);

  };

  useEffect(() => {

    getBlock();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline/>
        <Container fixed>
          <Button sx={{mt: 4, mb:6}} variant="contained" onClick = { getBlock }>
            Request Latest block info
          </Button>
          <Stack spacing={2}>
            <Item><strong>Block Number</strong>: { blockNo } </Item>
            <Item><strong>No of Transactions</strong>: { noTxn } </Item>
            <Item><strong>Miner</strong> : { miner } </Item>
            <Item><strong>Total Difficulty</strong>: {totalDifficulty} </Item>
          </Stack>
          <div>
            <TxnTable txnDatas = {txns} />
          </div>
        </Container>
    </React.Fragment>
  );
}

export default Block;