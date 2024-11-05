import { Menu, MenuItem, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function NavigationMenu() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Menu</Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Home</MenuItem>
        {session ? (
          <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
        ) : (
          <MenuItem onClick={() => signIn("google")}>Sign In</MenuItem>
        )}
      </Menu>
    </>
  );
}

