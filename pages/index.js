import { BudgitProvider } from "../src/context/BudgitContext";
import Budgit from "../src/components/budgit/Budgit";

const Home = () => {
  return (
    <BudgitProvider>
      <Budgit />
    </BudgitProvider>
  );
};

export default Home;
