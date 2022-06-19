import {
  Box,
  Button,
  capitalize,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect } from "react";
import dayjs from "dayjs";

import { BillersContext } from "../../context/BillersContext";

const BillersTable = () => {
  const { billers, create, edit, getBillers } = useContext(BillersContext);

  useEffect(() => {
    getBillers();
  }, []);

  const body = billers.length ? (
    billers.map((biller) => (
      <TableRow
        key={biller.id}
        onClick={() => edit(biller)}
        hover
        sx={{ cursor: "pointer" }}
      >
        <TableCell>{biller.name}</TableCell>
        <TableCell>{biller.category}</TableCell>
        <TableCell>
          {dayjs(biller.next_due_date).format("MM/DD/YYYY")}
        </TableCell>
        <TableCell>{capitalize(biller.frequency)}</TableCell>
        <TableCell>
          {biller.default_amount ? `$${biller.default_amount}` : ""}
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={5} align="center">
        No billers
      </TableCell>
    </TableRow>
  );

  return (
    <>
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" color="success" onClick={create}>
          + New Biller
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Next Due Date</TableCell>
            <TableCell>Frequency</TableCell>
            <TableCell>Default Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </>
  );
};

export default BillersTable;
