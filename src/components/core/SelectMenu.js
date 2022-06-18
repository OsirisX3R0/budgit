import { Select, MenuItem } from "@mui/material";

const SelectMenu = ({ items, ...selectProps }) => {
  const menu = items.length
    ? items.map((i) => (
        <MenuItem key={i.value || i.text || i} value={i.value || i.text || i}>
          {i.text || i.value || i}
        </MenuItem>
      ))
    : null;
  return <Select {...selectProps}>{menu}</Select>;
};

export default SelectMenu;
