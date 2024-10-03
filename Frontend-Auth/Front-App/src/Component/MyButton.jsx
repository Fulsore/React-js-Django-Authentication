import PropTypes from 'prop-types'; // Import PropTypes for validation
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
    const { label, type } = props;
    return (
        <Stack spacing={2} direction="row">
            <Button type={type} variant="contained" className='MyForm'>
                {label}
            </Button>
        </Stack>
    );
}

// Define prop types for validation
BasicButtons.propTypes = {
    label: PropTypes.string.isRequired, // Ensures 'label' is a string and required
};
