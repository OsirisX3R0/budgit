import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  ReceiptOutlined,
  Person,
  CalendarToday,
  ExitToApp,
} from "@mui/icons-material";

// import { GlobalContext } from "../../context/GlobalContext";

const FooterNav = () => {
  const router = useRouter();
  // const { key, name, logout } = useContext(GlobalContext);
  const [value, setValue] = useState(router.pathname.replace("/", ""));

  const onChange = (_, newValue) => {
    let route = `/${newValue}`;
    setValue(newValue);
    router.push(route);
  };

  const navigation = (
    <BottomNavigation value={value} onChange={onChange}>
      <BottomNavigationAction
        label="Dashboard"
        value=""
        icon={<ReceiptOutlined />}
      />
      <BottomNavigationAction
        label="Billers"
        value="billers"
        icon={<Person />}
      />
      <BottomNavigationAction
        label="Schedules"
        value="schedules"
        icon={<CalendarToday />}
      />
      {/* <BottomNavigationAction
        label="Settings"
        value="settings"
        icon={<Settings />}
      /> */}
      <BottomNavigationAction label="Logout" icon={<ExitToApp />} />
    </BottomNavigation>
  );

  return navigation;
};

export default FooterNav;
