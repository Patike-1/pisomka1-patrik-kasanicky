import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

export default function SignOutPage() {
  return (
    <Button variant="contained" onClick={() => signOut()}>
      Odhlásiť sa
    </Button>
  );
}