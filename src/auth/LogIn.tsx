import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

export function LogIn() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" />
      </FormControl>
      <Button variant="contained">Submit</Button>
    </Box>
  );
}
