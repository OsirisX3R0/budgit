import { createContext, useState, useReducer, useMemo } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import {
  newScheduleReducer,
  defaultSchedule,
} from "../reducers/newScheduleReducer";

export const SchedulesContext = createContext();

export const SchedulesProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([]);
  const [createMode, setCreateMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [schedule, dispatchSchedule] = useReducer(
    newScheduleReducer,
    defaultSchedule
  );

  const handleNewScheduleFrequency = (frequency) =>
    dispatchSchedule({ type: "FREQ", frequency });
  const handleNewScheduleAmount = (amount) =>
    dispatchSchedule({ type: "AMOUNT", amount });
  const handleNewScheduleDOW = (day_of_week) =>
    dispatchSchedule({ type: "DOW", day_of_week });
  const handleNewScheduleDOM = (day_of_month) =>
    dispatchSchedule({ type: "DOM", day_of_month });
  const handleNewScheduleDay = (day) => dispatchSchedule({ type: "DAY", day });
  const handleNewScheduleNextDue = (next_due_date) =>
    dispatchSchedule({ type: "NEXT", next_due_date });
  const handleNewScheduleFirstDue = (first_date) =>
    dispatchSchedule({ type: "FIRST", first_date });
  const handleNewScheduleSecondDue = (second_date) =>
    dispatchSchedule({ type: "SECOND", second_date });
  const editSchedule = (schedule) =>
    dispatchSchedule({ type: "EDIT", schedule });
  const resetSchedule = () => dispatchSchedule({ type: "RESET" });

  const close = () => {
    setCreateMode(false);
    setEditMode(false);
    resetSchedule();
  };

  const create = () => setCreateMode(true);

  const edit = (schedule) => {
    setEditMode(true);
    editSchedule(schedule);
  };

  const showModal = useMemo(
    () => createMode || editMode,
    [createMode, editMode]
  );

  const loadingBtn = useMemo(() => creating || editing, [creating, editing]);

  const getSchedules = () => {
    axios.get("/api/schedules").then(({ data }) => {
      setSchedules(data);
    });
  };

  const createSchedule = () => {
    setCreating(true);
    axios
      .post("/api/schedules/new", schedule)
      .then(() => {
        setCreateMode(false);
        resetSchedule();
        getSchedules();
      })
      .finally(() => setCreating(false));
  };

  const updateSchedule = () => {
    let { id, ...data } = schedule;
    setEditing(true);
    axios
      .put(`/api/schedules/${id}`, data)
      .then(() => {
        setEditMode(false);
        resetSchedule();
        getSchedules();
      })
      .finally(() => setEditing(false));
  };

  const deleteSchedule = (id) => {
    setDeleting(true);
    axios
      .delete(`/api/schedules/delete/${id}`)
      .then(() => {
        setEditMode(false);
        resetSchedule();
        getSchedules();
      })
      .finally(() => setDeleting(false));
  };

  return (
    <SchedulesContext.Provider
      value={{
        schedules,
        create,
        createMode,
        editMode,
        deleting,
        schedule,
        handleNewScheduleNextDue,
        handleNewScheduleFrequency,
        handleNewScheduleDOW,
        handleNewScheduleDOM,
        handleNewScheduleDay,
        handleNewScheduleFirstDue,
        handleNewScheduleSecondDue,
        handleNewScheduleAmount,
        close,
        edit,
        showModal,
        loadingBtn,
        getSchedules,
        createSchedule,
        updateSchedule,
        deleteSchedule,
      }}
    >
      <Container>{children}</Container>
    </SchedulesContext.Provider>
  );
};
