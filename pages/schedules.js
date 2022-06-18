import { Typography } from "@mui/material";
import { SchedulesProvider } from "../src/context/SchedulesContext";
import SchedulesTable from "../src/components/schedules/SchedulesTable";
import SchedulesModal from "../src/components/schedules/SchedulesModal";

const Schedules = () => {
  return (
    <SchedulesProvider>
      <Typography variant="h1">Pay Schedules</Typography>
      <SchedulesTable />
      <SchedulesModal />
    </SchedulesProvider>
  );
};

export default Schedules;
