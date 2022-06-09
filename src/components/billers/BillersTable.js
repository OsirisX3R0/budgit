import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const BillersTable = ({ billers, onRowClick }) => {
  const body = billers.length ? (
    billers.map((biller) => (
      <TableRow
        key={biller.id}
        onClick={() => onRowClick(biller)}
        hover
        sx={{ cursor: "pointer" }}
      >
        <TableCell>{biller.name}</TableCell>
        <TableCell>{biller.category}</TableCell>
        <TableCell>{biller.day_of_month}</TableCell>
        <TableCell>{biller.default_value}</TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={4} align="center">
        No users
      </TableCell>
    </TableRow>
  );

  return (
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
  );
};

export default BillersTable;
