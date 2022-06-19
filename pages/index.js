import { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

// import EnterName from "../src/components/home/EnterName";
// import EnterKey from "../src/components/home/EnterKey";
// import useQueryString from "../src/hooks/useQueryString";

const Home = () => {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/budgit?month=${dayjs().month()}&year=${dayjs().year()}`)
      .then(({ data }) => setPayments(data));
  }, []);

  return (
    <Container>
      {payments.length ? "Loading Budgit" : "No budgit found. Generating..."}
    </Container>
  );
};

export default Home;
