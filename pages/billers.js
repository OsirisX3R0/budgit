import { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

const Billers = () => {
  const [billers, setBillers] = useState([]);

  const body = billers.length ? (
    billers.map((biller) => (
      <>
        <TableCell>{biller.name}</TableCell>
        <TableCell>{biller.category}</TableCell>
        <TableCell>{biller.day}</TableCell>
        <TableCell>{biller.default_value}</TableCell>
      </>
    ))
  ) : (
    <TableCell colSpan={4} align="center">
      No users
    </TableCell>
  );

  return (
    <Container>
      <Typography variant="h1">Billers</Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Day of Month</TableCell>
            <TableCell>Default</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </Container>
  );
};

export default Billers;
