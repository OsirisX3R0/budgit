import { useContext } from "react";
import {
  Box,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LoadingButton, LocalizationProvider } from "@mui/lab";

import ModalBase from "../core/ModalBase";
import SelectMenu from "../core/SelectMenu";
import { BillersContext } from "../../context/BillersContext";
import { categories, frequencies } from "../../utils/items";

const BillersModal = () => {
  const {
    biller,
    showModal,
    close,
    createMode,
    editMode,
    createBiller,
    updateBiller,
    deleting,
    loadingBtn,
    handleNewBillerName,
    handleNewBillerCategory,
    handleNewBillerFrequency,
    handleNewBillerNextDue,
    handleNewBillerDefault,
  } = useContext(BillersContext);
  const handleClick = () => (createMode ? createBiller() : updateBiller());
  const buttonText = createMode ? "Create" : "Save";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <SelectMenu
            label="Frequency"
            value={biller.frequency}
            fullWidth
            items={frequencies}
            onChange={(e) => handleNewBillerFrequency(e.target.value)}
          />
        </Box>

        <Box sx={{ width: "100%", marginBottom: "1rem" }}>
          <MobileDatePicker
            label="Next Due Date"
            inputFormat="MM/DD/YYYY"
            value={biller.next_due_date}
            onChange={(date) => handleNewBillerNextDue(date)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>

        <Box sx={{ width: "100%", marginBottom: "1rem" }}>
          <InputLabel htmlFor="defaultAmount">Default Amount</InputLabel>
          <Input
            id="defaultAmount"
            type="number"
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
    </LocalizationProvider>
  );
};

export default BillersModal;
