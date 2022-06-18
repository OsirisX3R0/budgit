import { useContext } from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LoadingButton } from "@mui/lab";

import ModalBase from "../core/ModalBase";
import SelectMenu from "../core/SelectMenu";
import { BillersContext } from "../../context/BillersContext";

const categories = ["Electricity", "Water", "Gas", "Phone", "Internet", "Auto"];

const days = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21th",
  "22th",
  "23th",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "last",
];

const BillersModal = () => {
  const {
    biller,
    showModal,
    close,
    createMode,
    editMode,
    deleting,
    loadingBtn,
    handleNewBillerName,
    handleNewBillerCategory,
    handleNewBillerDOM,
    handleNewBillerDefault,
  } = useContext(BillersContext);
  const handleClick = () => (createMode ? createBiller() : updateBiller());
  const buttonText = createMode ? "Create" : "Save";

  return (
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
        <SelectMenu
          label="Category"
          value={biller.category}
          fullWidth
          items={categories}
          onChange={(e) => handleNewBillerCategory(e.target.value)}
        />
      </Box>

      <Box sx={{ width: "100%", marginBottom: "1rem" }}>
        {/* <SelectMenu
          label="Day of Month"
          value={biller.day_of_month}
          fullWidth
          items={days}
          onChange={(e) => handleNewBillerDOM(e.target.value)}
        /> */}
        <MobileDatePicker
          label="Next Due Date"
          inputFormat="MM/dd/yyyy"
          value={biller.next_due_date}
          onChange={(date) => handleNewBillerDOM(date)}
          renderInput={(params) => <TextField {...params} />}
        />
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
};

export default BillersModal;
