import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
});

function createData(id, name, calories, fat, carbs, protein) {
  return {id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('001','Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('002','Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('003','Eclair', 262, 16.0, 24, 6.0),
  createData('004','Cupcake', 305, 3.7, 67, 4.3),
  createData('005','Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();
  const [expandedRow, setExpandedRow] = React.useState([]);
  
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
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <React.Fragment key={row.id}>
              <TableRow onClick={() => handleClick(row.id)}>
                <TableCell component="th" scope="row">
                  {row.id} - {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell padding='none' colSpan={5}>
                  <Collapse in={expandedRow.includes(row.id)} timeout="auto" unmountOnExit>
                    {row.id} details
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
