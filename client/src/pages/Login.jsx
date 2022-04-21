const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Clicked sign in');

        const { username, password } = document.forms[0];
        console.log('username: ', username.value);
        console.log('password: ', password.value);

        const loginUser = await fetch('http://localhost:8080/users/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        });
        const json = await loginUser.json();
        console.log(json);
    };

    // 		POST http://localhost:8080/users/login
    // Content-Type: application/json

    // {
    //    "username":"mahi5",
    //    "password": "test123"
    // }

    return (
        <main>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                />
                <button>Sign in</button>
            </form>
        </main>
    );
};

export default Login;
