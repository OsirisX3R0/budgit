import { Fragment, useEffect, useReducer, useState } from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
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

const defaultBiller = {
  name: "",
  category: "",
  day_of_month: "",
  default_amount: "",
};

const newBillerReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.name };
    case "CATEGORY":
      return { ...state, category: action.category };
    case "DOM":
      return { ...state, day_of_month: action.day_of_month };
    case "DEFAULT":
      return { ...state, default_amount: action.default_amount };
    default:
      return state;
  }
};

const modalStyles = {
  maxWidth: "400px",
  backgroundColor: "#f5f5f5",
  color: "#333",
  border: "1px solid #aaa",
  borderRadius: "3px",
  margin: "1rem auto",
  padding: "1rem",
};

const Billers = () => {
  const [billers, setBillers] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [newBiller, dispatchNewBiller] = useReducer(
    newBillerReducer,
    defaultBiller
  );

  const getBillers = () => {
    axios.get("/api/billers").then(({ data }) => setBillers(data));
  };

  const createBiller = () => {
    axios.post("/api/billers/new", newBiller).then(() => {
      setShowCreate(false);
      getBillers();
    });
  };

  useEffect(() => {
    getBillers();
  }, []);

  const handleNewBillerName = (name) =>
    dispatchNewBiller({ type: "NAME", name });
  const handleNewBillerCategory = (category) =>
    dispatchNewBiller({ type: "CATEGORY", category });
  const handleNewBillerDOM = (day_of_month) =>
    dispatchNewBiller({ type: "DOM", day_of_month });
  const handleNewBillerDefault = (default_amount) =>
    dispatchNewBiller({ type: "DEFAULT", default_amount });

  const body = (
    <TableRow>
      {billers.length ? (
        billers.map((biller) => (
          <Fragment key={biller.id}>
            <TableCell>{biller.name}</TableCell>
            <TableCell>{biller.category}</TableCell>
            <TableCell>{biller.day_of_month}</TableCell>
            <TableCell>{biller.default_value}</TableCell>
          </Fragment>
        ))
      ) : (
        <TableCell colSpan={4} align="center">
          No users
        </TableCell>
      )}
    </TableRow>
  );

  const create = (
    <Modal open={showCreate} onClose={() => setShowCreate(false)}>
      <Box sx={modalStyles}>
        <Typography variant="h3">New Biller</Typography>

        <Box sx={{ width: "100%", marginBottom: "1rem" }}>
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            value={newBiller.name}
            onChange={(e) => handleNewBillerName(e.target.value)}
          />
        </Box>

        <Box sx={{ width: "100%", marginBottom: "1rem" }}>
          <Select
            label="Category"
            value={newBiller.category}
            fullWidth
            onChange={(e) => handleNewBillerCategory(e.target.value)}
          >
            <MenuItem value={"Electricity"}>Electricity</MenuItem>
            <MenuItem value={"Water"}>Water</MenuItem>
            <MenuItem value={"Gas"}>Gas</MenuItem>
            <MenuItem value={"Phone"}>Phone</MenuItem>
            <MenuItem value={"Internet"}>Internet</MenuItem>
            <MenuItem value={"Auto"}>Auto</MenuItem>
          </Select>
        </Box>

        <Box sx={{ width: "100%", marginBottom: "1rem" }}>
          <Select
            label="Day of Month"
            value={newBiller.day_of_month}
            fullWidth
            onChange={(e) => handleNewBillerDOM(e.target.value)}
          >
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
        </Box>

        <Box sx={{ width: "100%", marginBottom: "1rem" }}>
          <TextField
            type="number"
            label="Default Amount"
            variant="standard"
            fullWidth
            value={newBiller.default_amount}
            onChange={(e) => handleNewBillerDefault(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </Box>

        <Button variant="contained" color="primary" onClick={createBiller}>
          Create
        </Button>
      </Box>
    </Modal>
  );

  return (
    <Container>
      <Typography variant="h1">Billers</Typography>

      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
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
