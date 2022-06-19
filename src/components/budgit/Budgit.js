import { useContext } from "react";
import { BudgitContext } from "../../context/BudgitContext";

const Budgit = () => {
  const { payments } = useContext(BudgitContext);
  return (
    <div>
      {payments.length ? "Loaded Budgit" : "No budgit found. Generating..."}
    </div>
  );
};

export default Budgit;
