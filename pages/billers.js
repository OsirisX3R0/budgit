import { Typography } from "@mui/material";
import { BillersProvider } from "../src/context/BillersContext";
import BillersTable from "../src/components/billers/BillersTable";
import BillersModal from "../src/components/billers/BillersModal";

const Billers = () => {
  return (
    <BillersProvider>
      <Typography variant="h1">Billers</Typography>
      <BillersTable />
      <BillersModal />
    </BillersProvider>
  );
};

export default Billers;
