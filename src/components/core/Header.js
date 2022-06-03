import { AppBar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Typography variant="h1">budgit</Typography>
    </AppBar>
  );
};

export default Header;
