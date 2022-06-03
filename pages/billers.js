import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Modal,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const Billers = () => {
  const [billers, setBillers] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  const getBillers = () => {
    axios.get("/api/billers").then(({ data }) => setBillers(data));
  };

  useEffect(() => {
    getBillers();
  }, []);

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

  const create = (
    <Modal open={showCreate}>
      <Typography variant="h3">New Biller</Typography>

      <TextField label="Name" variant="standard" />

      <Select label="Category">
        <MenuItem value={"electricity"}>Electricity</MenuItem>
        <MenuItem value={"water"}>Water</MenuItem>
        <MenuItem value={"gas"}>Gas</MenuItem>
        <MenuItem value={"phone"}>Phone</MenuItem>
        <MenuItem value={"internet"}>Internet</MenuItem>
        <MenuItem value={"auto"}>Auto</MenuItem>
      </Select>

      <Select label="Day of Month">
        <MenuItem value={"1st"}>1st</MenuItem>
        <MenuItem value={"2nd"}>2nd</MenuItem>
        <MenuItem value={"3rd"}>3rd</MenuItem>
        <MenuItem value={"4th"}>4th</MenuItem>
        <MenuItem value={"5th"}>5th</MenuItem>
        <MenuItem value={"6th"}>6th</MenuItem>
        <MenuItem value={"7th"}>7th</MenuItem>
        <MenuItem value={"8th"}>8th</MenuItem>
        <MenuItem value={"9th"}>9th</MenuItem>
        <MenuItem value={"10th"}>10th</MenuItem>
        <MenuItem value={"11th"}>11th</MenuItem>
        <MenuItem value={"12th"}>12th</MenuItem>
        <MenuItem value={"13th"}>13th</MenuItem>
        <MenuItem value={"14th"}>14th</MenuItem>
        <MenuItem value={"15th"}>15th</MenuItem>
        <MenuItem value={"16th"}>16th</MenuItem>
        <MenuItem value={"17th"}>17th</MenuItem>
        <MenuItem value={"18th"}>18th</MenuItem>
        <MenuItem value={"19th"}>19th</MenuItem>
        <MenuItem value={"20th"}>20th</MenuItem>
        <MenuItem value={"21th"}>21th</MenuItem>
        <MenuItem value={"22th"}>22th</MenuItem>
        <MenuItem value={"23th"}>23th</MenuItem>
        <MenuItem value={"24th"}>24th</MenuItem>
        <MenuItem value={"25th"}>25th</MenuItem>
        <MenuItem value={"26th"}>26th</MenuItem>
        <MenuItem value={"27th"}>27th</MenuItem>
        <MenuItem value={"28th"}>28th</MenuItem>
        <MenuItem value={"29th"}>29th</MenuItem>
        <MenuItem value={"30th"}>30th</MenuItem>
        <MenuItem value={"last"}>last</MenuItem>
      </Select>

      <TextField type="number" label="Default Amount" variant="standard" />
    </Modal>
  );

  return (
    <Container>
      <Typography variant="h1">Billers</Typography>

      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => setShowCreate(true)}
        >
          + New Biller
        </Button>
      </Box>
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
      {create}
    </Container>
  );
};

export default Billers;
