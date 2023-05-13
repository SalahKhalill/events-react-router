import {
    Form,
    Link,
    useActionData,
    useNavigation,
    useSearchParams,
} from 'react-router-dom'

import classes from './AuthForm.module.css'

function AuthForm() {
    // we have to get access to querey parameters to get which page we want Login wiether SignUp page
    // there is a hook in react router (useSearchParams)
    //The useSearchParams hook is used to read and modify the query string in the URL for the current location
    const data = useActionData()

    const navigation = useNavigation()

    const [searchParams] = useSearchParams()
    const isLogin = searchParams.get('mode') === 'login'
    const isSubmitting = navigation.state === 'isSubmitting'
    return (
        <>
            <Form method="post" className={classes.form}>
                <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
                {data && data.errors && (
                    <ul>
                        {/* in the bottom example since errors will be an object we will use the built in Object method  */}
                        {/* it will give me an array of errors then we will map it  */}
                        {Object.values(data.errors).map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                )}
                {data && data.message && <p>{data.message}</p>}
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="image">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        required
                    />
                </p>
                <div className={classes.actions}>
                    <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
                        {/*Here we are going to use query parameters*/}

                        {isLogin ? 'Create new user' : 'Login'}
                    </Link>
                    <button disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Save'}
                    </button>
                </div>
            </Form>
        </>
    )
}

export default AuthForm
