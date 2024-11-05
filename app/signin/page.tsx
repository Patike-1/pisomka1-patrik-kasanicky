"use client"

import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <Button variant="contained" onClick={() => signIn("google")}>
      Prihlásiť sa cez Google
    </Button>
  );
}
