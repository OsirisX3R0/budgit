import { Fragment, useEffect, useMemo, useReducer, useState } from "react";
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
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import ModalBase from "../src/components/core/ModalBase";

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
    case "EDIT":
      return action.biller;
    case "RESET":
      return defaultBiller;
    default:
      return state;
  }
};

const Billers = () => {
  const [billers, setBillers] = useState([]);
  const [createMode, setCreateMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [biller, dispatchBiller] = useReducer(newBillerReducer, defaultBiller);

  const handleNewBillerName = (name) => dispatchBiller({ type: "NAME", name });
  const handleNewBillerCategory = (category) =>
    dispatchBiller({ type: "CATEGORY", category });
  const handleNewBillerDOM = (day_of_month) =>
    dispatchBiller({ type: "DOM", day_of_month });
  const handleNewBillerDefault = (default_amount) =>
    dispatchBiller({ type: "DEFAULT", default_amount });
  const editBiller = (biller) => dispatchBiller({ type: "EDIT", biller });
  const resetBiller = () => dispatchBiller({ type: "RESET" });

  const close = () => {
    setCreateMode(false);
    setEditMode(false);
    resetBiller();
  };

  const edit = (biller) => {
    setEditMode(true);
    editBiller(biller);
  };

  const showModal = useMemo(
    () => createMode || editMode,
    [createMode, editMode]
  );
  const loadingBtn = useMemo(() => creating || editing, [creating, editing]);

  const getBillers = () => {
    axios.get("/api/billers").then(({ data }) => setBillers(data));
  };

  const createBiller = () => {
    setCreating(true);
    axios
      .post("/api/billers/new", biller)
      .then(() => {
        setCreateMode(false);
        resetBiller();
        getBillers();
      })
      .finally(() => setCreating(false));
  };

  const updateBiller = () => {
    let { id, ...data } = biller;
    setEditing(true);
    axios
      .put(`/api/billers/${id}`, data)
      .then(() => {
        setEditMode(false);
        resetBiller();
        getBillers();
      })
      .finally(() => setEditing(false));
  };

  const deleteBiller = (id) => {
    setDeleting(true);
    axios
      .delete(`/api/billers/delete/${id}`)
      .then(() => {
        setEditMode(false);
        resetBiller();
        getBillers();
      })
      .finally(() => setDeleting(false));
  };

  const handleClick = () => (createMode ? createBiller() : updateBiller());

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

  const buttonText = createMode ? "Create" : "Save";

  const modal = (
    <ModalBase open={showModal} onClose={close}>
      <Typography variant="h3">New Biller</Typography>

      <Box sx={{ width: "100%", marginBottom: "1rem" }}>
        <TextField
          label="Name"
          variant="standard"
          fullWidth
          value={biller.name}
          onChange={(e) => handleNewBillerName(e.target.value)}
        />
      </Box>

      <Box sx={{ width: "100%", marginBottom: "1rem" }}>
        <Select
          label="Category"
          value={biller.category}
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
          value={biller.day_of_month}
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
          value={biller.default_amount}
          onChange={(e) => handleNewBillerDefault(e.target.value)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </Box>

      <LoadingButton
        variant="contained"
        color="success"
        loading={loadingBtn}
        onClick={handleClick}
      >
        {buttonText}
      </LoadingButton>
      {editMode ? (
        <Box sx={{ marginLeft: "1rem" }}>
          <LoadingButton
            variant="contained"
            color="error"
            loading={deleting}
            onClick={() => deleteBiller(biller.id)}
          >
            Delete
          </LoadingButton>
        </Box>
      ) : null}
    </ModalBase>
  );

  return (
    <Container>
      <Typography variant="h1">Billers</Typography>

      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => setCreateMode(true)}
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
      {modal}
    </Container>
  );
};

export default Billers;
