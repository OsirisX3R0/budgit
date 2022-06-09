import { useMemo } from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

const ModalBase = ({ maxWidth, children, ...modalProps }) => {
  const modalStyles = useMemo(
    () => ({
      maxWidth: maxWidth || "400px",
      backgroundColor: "#f5f5f5",
      color: "#333",
      border: "1px solid #aaa",
      borderRadius: "3px",
      margin: "1rem auto",
      padding: "1rem",
    }),
    [maxWidth]
  );

  return (
    <Modal {...modalProps}>
      <Box sx={modalStyles}>{children}</Box>
    </Modal>
  );
};

export default ModalBase;
