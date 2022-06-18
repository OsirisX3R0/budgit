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

import { SchedulesContext } from "../../context/SchedulesContext";

const SchedulesTable = () => {
  const { schedules, create, edit, getSchedules } =
    useContext(SchedulesContext);

  useEffect(() => {
    getSchedules();
  }, []);

  const dates = (schedule) => {
    switch (schedule.frequency) {
      case "semimonthly":
        return `${schedule.first_date}/${schedule.second_date}`;
      case "weekly":
        return dayjs().isoWeekday(schedule.day_of_week);
      case "monthly":
        return schedule.day || schedule.day_of_month;
      default:
        return schedule.next_due_date;
    }
  };

  const body = schedules.length ? (
    schedules.map((schedule) => (
      <TableRow
        key={schedule.id}
        onClick={() => edit(schedule)}
        hover
        sx={{ cursor: "pointer" }}
      >
        <TableCell>{capitalize(schedule.frequency)}</TableCell>
        <TableCell>{schedule.amount ? `$${schedule.amount}` : null}</TableCell>
        <TableCell>
          {dayjs(schedule.next_due_date).format("MM/DD/YYYY")}
        </TableCell>
        <TableCell>{dates(schedule)}</TableCell>
        {/* <TableCell>
          {schedule.default_amount ? `$${schedule.default_amount}` : ""}
        </TableCell> */}
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
    <>
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" color="success" onClick={create}>
          + New Schedule
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Frequency</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Dates</TableCell>
            {/* <TableCell>Default Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </>
  );
};

export default SchedulesTable;
