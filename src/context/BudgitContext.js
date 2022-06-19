import { createContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

export const BudgitContext = createContext();

const month = dayjs().month();
const year = dayjs().year();

export const BudgitProvider = ({ children }) => {
  const [payments, setPayments] = useState([]);

  const getBudgit = () => {
    return axios
      .get(`/api/budgit?month=${month}&year=${year}`)
      .then(({ data }) => setPayments(() => [...data]));
  };

  useEffect(() => {
    getBudgit().then(() => {
      if (!payments.length) axios.post("/api/budgit", { month, year });
    });
  }, []);

  useEffect(() => {});

  return (
    <BudgitContext.Provider
      value={{
        payments,
        getBudgit,
      }}
    >
      <Container>{children}</Container>
    </BudgitContext.Provider>
  );
};
