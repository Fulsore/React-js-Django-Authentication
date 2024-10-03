import '../App.css'
import MyPassword from './MyPassword';
import { Box } from '@mui/material';
import MyTextField from './MyTextFields';
import MyButton from './MyButton'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AxiosInstance from '../Component/Axios';
const Login = () => {
        const navigate = useNavigate()
        const {handleSubmit, control} = useForm()
        // const [ShowMessage, setShowMessage] = useState(false)
    
        const submission = (data) => {
            AxiosInstance.post(`login/`,{
                email: data.email, 
                password: data.password,
            })
    
            .then((response) => {
                console.log(response)
                localStorage.setItem('Token', response.data.token)
                navigate(`/home`)
            })
            .catch((error) => {
                // setShowMessage(true)
                console.error('Error during login', error)
            })
        }
    return (
        <div className='Bc1'>
             <form onSubmit={handleSubmit(submission)}>
            <div>
                <Box className={'From'}>
                    <Box className={'Items'} >
                        <Box className={'Title'}>Login Form:</Box>
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
                        <MyButton
                        type={'submit'}
                            label={"Login"} />
                    </Box>
                    <Box className={'Items'}>
                        <Link to={"/register"}>No Account? Please Register</Link>
                    </Box>
                </Box>
            </div>
            </form>
        </div>
    )
}

export default Login;