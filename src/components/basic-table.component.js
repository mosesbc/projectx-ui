import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, Box, Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
});

export default function BasicTable({ personList }) {
  const classes = useStyles();
  const [expandedRow, setExpandedRow] = React.useState([]);
  const rows = [...personList]
  
  const handleClick = (id) => {
    let newArr = [];
    if (expandedRow.includes(id)) {
      newArr = expandedRow.filter(el => el !== id);
    } else {
      newArr = [...expandedRow,id]
    }
    setExpandedRow(newArr)
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell>Client Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <React.Fragment key={row.clientId}>
              <TableRow onClick={() => handleClick(row.clientId)}>
                <TableCell>
                  <Avatar alt="pic here" src=""/>
                </TableCell>
                <TableCell>{row.clientId}</TableCell>
                <TableCell>{row.name.first}</TableCell>
                <TableCell>{row.name.last}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell padding='none' colSpan={5}>
                  <Collapse in={expandedRow.includes(row.clientId)} timeout="auto" unmountOnExit>
                    <Box p={[2, 2, 2]}>
                      {row.clientId} details
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
