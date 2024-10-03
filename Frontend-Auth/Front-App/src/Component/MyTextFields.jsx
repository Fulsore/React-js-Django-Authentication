import '../App.css';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form'

function MyTextField(props) {
  const { label, name, control } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,

      }) => (
        <TextField
          id="outlined-basic"
          onChange={onChange}
          value={value}
          label={label}
          fullWidth
          variant="outlined"
          className='MyForm'
          error={!!error}
          helperText={error?.message}
        />
      )
      }>
    </Controller>
  );
}
export default MyTextField;
