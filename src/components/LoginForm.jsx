import * as z from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'

const formSchema = z.object({
    email: z.string().email()
})

const handleSubmit = () => {
    console.log('submitted')
}


const LoginForm = () => {
    // const form = useForm(formSchema)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    return (
        <div className='flex flex-col w-full'>
            <Form {...form}>
                <form className='w-full flex flex-col gap-3'>
                    <FormField name="email" render={({field}) => {
                        return <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Email Address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }} />
                    <Button>Login</Button>
                </form>
            </Form>
        </div>
    )
}

export default LoginForm
