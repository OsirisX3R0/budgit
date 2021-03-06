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
import formatOrdinal from "../../utils/formatOrdinal";
import { frequencies, of_month } from "../../utils/items";

const SchedulesTable = () => {
  const { schedules, create, edit, getSchedules } =
    useContext(SchedulesContext);

  useEffect(() => {
    getSchedules();
  }, []);

  const formatDate = (schedule) => {
    switch (schedule.frequency) {
      case "semimonthly":
        return `${dayjs(schedule.first_date).format("MM/DD/YYYY")} | ${dayjs(
          schedule.second_date
        ).format("MM/DD/YYYY")}`;
      case "weekly":
        return dayjs().isoWeekday(schedule.day_of_week).format("ddd");
      case "monthly":
        return schedule.day
          ? formatOrdinal(schedule.day)
          : of_month[schedule.day_of_month];
      default:
        return dayjs(schedule.next_due_date).format("MM/DD/YYYY");
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
        <TableCell>{frequencies[schedule.frequency]}</TableCell>
        <TableCell>{schedule.amount ? `$${schedule.amount}` : null}</TableCell>
        <TableCell>{formatDate(schedule)}</TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={4} align="center">
        No schedules
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
          </TableRow>
        </TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </>
  );
};

export default SchedulesTable;
