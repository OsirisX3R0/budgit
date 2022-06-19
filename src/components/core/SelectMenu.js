import { Select, MenuItem } from "@mui/material";

const SelectMenu = ({ items, ...selectProps }) => {
  const menu = (items) => {
    if (items.length) {
      return items.map((i) => (
        <MenuItem key={i.value || i.text || i} value={i.value || i.text || i}>
          {i.text || i.value || i}
        </MenuItem>
      ));
    }

    if (typeof items === "object") {
      let itemsArr = [];
      for (let key in items) {
        itemsArr.push(
          <MenuItem key={key} value={key}>
            {items[key]}
          </MenuItem>
        );
      }

      return itemsArr;
    }

    return null;
  };

  return <Select {...selectProps}>{menu(items)}</Select>;
};

export default SelectMenu;
