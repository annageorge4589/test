import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useEffect, useState } from 'react';

const View = () => {
    const [rows,setRows]=useState([]);
    useEffect(()=>{ 
    axios.get('https://fakestoreapi.com/products').then((res)=>{
     setRows(res.data);
  })
    },[])

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell align="right">Title</TableCell>
         <TableCell align="right">Description</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">image</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="right"> 
              {row.title}
            </TableCell>
            <TableCell align="right">{row.title}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.image}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default View