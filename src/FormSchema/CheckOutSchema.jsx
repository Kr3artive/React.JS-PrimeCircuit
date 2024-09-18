import {z} from 'zod'


const CheckOutSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    address: z.string().min(1, 'Address is required'),
    city: z.string().min(1, 'City is required'),
    zip: z.string().regex(/^\d{5}$/, 'Zip code must be 5 digits'),
    cardNumber: z.string().regex(/^\d{16}$/, 'Card number must be 16 digits'),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiration date (MM/YY)'),
    cvv: z.string().regex(/^\d{3}$/, 'CVV must be 3 digits'),
});

export default CheckOutSchema