import {z} from 'zod'

const SignUpSchema = z.object({
    fullname: z.string().min(3, {message :'Full name must be at least 3 characters'}),
    email: z.string().email( {message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
    repeatPassword: z.string().min(6, {message: 'Password must be at least 6 characters'}),
    terms: z.boolean().refine((value) => value === true, {message: 'You must accept the terms and conditions'}),
}).refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
});

export default SignUpSchema
