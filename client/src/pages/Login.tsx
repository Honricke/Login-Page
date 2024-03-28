import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@mui/material";

interface FormType {
  email: string;
  pass: string;
}

function Login() {
  const { handleSubmit, control } = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: 'flex-start',
        width: "400px",
        gap: "20px",
      }}
    >
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { value, onChange } }) => (
          <TextField
            id="inputEmail"
            value={value}
            onChange={onChange}
            label="Email"
            variant="outlined"
            type="email"
          />
        )}
      />
      <Controller
        control={control}
        name="pass"
        defaultValue=""
        render={({ field: { value, onChange } }) => (
          <TextField
            id="inputEmail"
            value={value}
            onChange={onChange}
            label="Password"
            variant="outlined"
            type="password"
          />
        )}
      />
      <Button type="submit" variant="contained" style={{ outline: "None" }}>
        Send
      </Button>
      <a href="">Esqueci a senha</a>
    </form>
  );
}

export default Login;
