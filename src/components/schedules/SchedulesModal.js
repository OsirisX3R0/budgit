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
import { SchedulesContext } from "../../context/SchedulesContext";
import { frequency } from "@prisma/client";

const frequencies = [
  { value: "onetime", text: "One-Time" },
  { value: "weekly", text: "Weekly" },
  { value: "biweekly", text: "Bi-Weekly" },
  { value: "monthly", text: "Monthly" },
  { value: "semimonthly", text: "Semi-Monthly" },
];

const of_week = [
  { value: 0, text: "Sun" },
  { value: 1, text: "Mon" },
  { value: 2, text: "Tue" },
  { value: 3, text: "Wed" },
  { value: 4, text: "Thu" },
  { value: 5, text: "Fri" },
  { value: 6, text: "Sat" },
];

const of_month = [
  { value: "firstbusiness", text: "First Business" },
  { value: "lastbusiness", text: "Last Business" },
  { value: "firstfriday", text: "First Friday" },
  { value: "lastfriday", text: "Last Friday" },
  { value: "secondwed", text: "Second Wednesday" },
  { value: "thirdwed", text: "Third Wednesday" },
  { value: "fourthwed", text: "Fourth Wednesday" },
  { value: "specific", text: "Specific" },
];

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const SchedulesModal = () => {
  const {
    schedule,
    showModal,
    close,
    createMode,
    editMode,
    createSchedule,
    updateSchedule,
    deleting,
    loadingBtn,
    handleNewScheduleNextDue,
    handleNewScheduleFrequency,
    handleNewScheduleDOW,
    handleNewScheduleDOM,
    handleNewScheduleDay,
    handleNewScheduleFirstDue,
    handleNewScheduleSecondDue,
    handleNewScheduleAmount,
  } = useContext(SchedulesContext);
  const handleClick = () => (createMode ? createSchedule() : updateSchedule());
  const buttonText = createMode ? "Create" : "Save";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ModalBase open={showModal} onClose={close}>
        <Typography variant="h3">New Schedule</Typography>

        <Box sx={{ width: "100%", marginBottom: "1rem" }}>
          <SelectMenu
            label="Frequency"
            value={schedule.frequency}
            fullWidth
            items={frequencies}
            onChange={(e) => handleNewScheduleFrequency(e.target.value)}
          />
        </Box>

        <Box sx={{ width: "100%", marginBottom: "1rem" }}>
          <InputLabel htmlFor="amount">Default Amount</InputLabel>
          <Input
            id="amount"
            type="number"
            variant="standard"
            fullWidth
            value={schedule.amount}
            onChange={(e) => handleNewScheduleAmount(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </Box>

        {schedule.frequency === "weekly" ||
        schedule.frequency === "biweekly" ? (
          <Box sx={{ width: "100%", marginBottom: "1rem" }}>
            <SelectMenu
              label="Day of Week"
              value={schedule.day_of_week}
              fullWidth
              items={of_week}
              onChange={(e) => handleNewScheduleDOW(e.target.value)}
            />
          </Box>
        ) : null}

        {schedule.frequency === "monthly" ? (
          <Box sx={{ width: "100%", marginBottom: "1rem" }}>
            <SelectMenu
              label="Day of Month"
              value={schedule.day_of_month}
              fullWidth
              items={of_month}
              onChange={(e) => handleNewScheduleDOM(e.target.value)}
            />
          </Box>
        ) : null}

        {schedule.frequency === "monthly" &&
        schedule.day_of_month === "specific" ? (
          <Box sx={{ width: "100%", marginBottom: "1rem" }}>
            <SelectMenu
              label="Day"
              value={schedule.day}
              fullWidth
              items={days}
              onChange={(e) => handleNewScheduleDay(e.target.value)}
            />
          </Box>
        ) : null}

        {schedule.frequency === "onetime" ||
        (schedule.frequency === "biweekly" && schedule.day_of_week) ? (
          <Box sx={{ width: "100%", marginBottom: "1rem" }}>
            <MobileDatePicker
              label="Next Due Date"
              inputFormat="MM/DD/YYYY"
              value={schedule.next_due_date}
              onChange={(date) => handleNewScheduleNextDue(date)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        ) : null}

        {schedule.frequency === "semimonthly" ? (
          <Box sx={{ width: "100%", marginBottom: "1rem" }}>
            <MobileDatePicker
              label="First Date"
              inputFormat="MM/DD/YYYY"
              value={schedule.first_date}
              onChange={(date) => handleNewScheduleFirstDue(date)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        ) : null}

        {schedule.frequency === "semimonthly" ? (
          <Box sx={{ width: "100%", marginBottom: "1rem" }}>
            <MobileDatePicker
              label="Second Date"
              inputFormat="MM/DD/YYYY"
              value={schedule.second_date}
              onChange={(date) => handleNewScheduleSecondDue(date)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        ) : null}

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
              onClick={() => deleteSchedule(biller.id)}
            >
              Delete
            </LoadingButton>
          </Box>
        ) : null}
      </ModalBase>
    </LocalizationProvider>
  );
};

export default SchedulesModal;
