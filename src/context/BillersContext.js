import { createContext, useState, useReducer } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import { newBillerReducer, defaultBiller } from "../reducers/newBillerReducer";

export const BillersContext = createContext();

export const BillersProvider = ({ children }) => {
  const [billers, setBillers] = useState([]);
  const [createMode, setCreateMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [biller, dispatchBiller] = useReducer(newBillerReducer, defaultBiller);

  const handleNewBillerName = (name) => dispatchBiller({ type: "NAME", name });
  const handleNewBillerCategory = (category) =>
    dispatchBiller({ type: "CATEGORY", category });
  const handleNewBillerDOM = (day_of_month) =>
    dispatchBiller({ type: "DOM", day_of_month });
  const handleNewBillerDefault = (default_amount) =>
    dispatchBiller({ type: "DEFAULT", default_amount });
  const editBiller = (biller) => dispatchBiller({ type: "EDIT", biller });
  const resetBiller = () => dispatchBiller({ type: "RESET" });

  const close = () => {
    setCreateMode(false);
    setEditMode(false);
    resetBiller();
  };

  const create = () => setCreateMode(true);

  const edit = (biller) => {
    setEditMode(true);
    editBiller(biller);
  };

  const showModal = useMemo(
    () => createMode || editMode,
    [createMode, editMode]
  );

  const loadingBtn = useMemo(() => creating || editing, [creating, editing]);

  const getBillers = () => {
    axios.get("/api/billers").then(({ data }) => setBillers(data));
  };

  const createBiller = () => {
    setCreating(true);
    axios
      .post("/api/billers/new", biller)
      .then(() => {
        setCreateMode(false);
        resetBiller();
        getBillers();
      })
      .finally(() => setCreating(false));
  };

  const updateBiller = () => {
    let { id, ...data } = biller;
    setEditing(true);
    axios
      .put(`/api/billers/${id}`, data)
      .then(() => {
        setEditMode(false);
        resetBiller();
        getBillers();
      })
      .finally(() => setEditing(false));
  };

  const deleteBiller = (id) => {
    setDeleting(true);
    axios
      .delete(`/api/billers/delete/${id}`)
      .then(() => {
        setEditMode(false);
        resetBiller();
        getBillers();
      })
      .finally(() => setDeleting(false));
  };

  return (
    <BillersContext.Provider
      value={{
        billers,
        create,
        createMode,
        editMode,
        deleting,
        biller,
        handleNewBillerName,
        handleNewBillerCategory,
        handleNewBillerDOM,
        handleNewBillerDefault,
        close,
        edit,
        showModal,
        loadingBtn,
        getBillers,
        createBiller,
        updateBiller,
        deleteBiller,
      }}
    >
      <Container>{children}</Container>
    </BillersContext.Provider>
  );
};
