import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

export default function InputAdornments(props) {
    const { label, name, control } = props;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => (
                <>
                    <div>
                        <FormControl variant="outlined" className={'MyForm'}>
                            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                onChange={onChange} // Corrected typo
                                value={value}
                                fullWidth
                                error={!!error}
                                type={showPassword ? 'text' : 'password'}
                                className='MyForm'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label={label}
                            />
                            <FormHelperText sx={{ color: "#654" }}>
                                {error?.message}
                            </FormHelperText> {/* Closed correctly */}
                        </FormControl>
                    </div>
                </>
            )}
        />
    );
}

// Define prop types for validation
InputAdornments.propTypes = {
    label: PropTypes.string.isRequired, // Ensures 'label' is a string and required
    name: PropTypes.string.isRequired,  // 'name' is required and must be a string
    control: PropTypes.object.isRequired // 'control' is required and must be an object
};
