import '../App.css'
import MyPassword from './MyPassword';
import { Box } from '@mui/material';
import MyTextField from './MyTextFields';
import MyButton from './MyButton'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AxiosInstance from '../Component/Axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()
    const submission = (data) => {
        AxiosInstance.post('register/', {
            name: data.name,
            email: data.email,
            password: data.password,
        })
        .then(() => {
            navigate('/')
        })
        .catch((error) => {
            console.error('Error during registration', error.response.data); // Log the backend error for better debugging
        }
    )
    }
    return (
        <div className='Bc1'>
            <form onSubmit={handleSubmit(submission)}> 
            <div>
                <Box className={'From'}>
                    <Box className={'Items'} >
                        <Box className={'Title'}>Register Form:</Box>
                    </Box>
                    <Box className={'Items'}>
                            <MyTextField
                                label={"Name"}  // Add the Name field
                                name={'name'}   // Correct the name prop
                                control={control}
                            />
                        </Box>

                    <Box className={'Items'}>
                        <MyTextField
                            label={"Email"}
                            name = {'email'}
                            control={control}
                        />
                    </Box>
                    <Box className={'Items'}>
                        <MyPassword
                            label={"Password"}
                            name = {'password'}
                            control={control}
                        />
                    </Box>
                    <Box className={'Items'}>
                        <MyPassword
                            label={"Conform Password"}
                            name = {'conform password'}
                            control={control}
                        />
                    </Box>
                    <Box className={'Items'}>
                        <MyButton
                            type = {'submit'}
                            label={"Register"} />
                    </Box>
                    <Box className={'Items'}>
                        <Link to={"/"}>Login If Alreafy have a Account</Link>
                    </Box>
                </Box>
            </div>
            </form>
            
        </div>
    )
}

export default Login;