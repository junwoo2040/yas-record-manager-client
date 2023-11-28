import { useAccountLoginMutation } from "@graphql/generated";
import { graphQLRequestClient } from "@utils/clients";
import { FC, useState } from "react";

interface IValue {
  username: string;
  password: string;
}

const Login: FC = () => {
  const [value, setValue] = useState<IValue>({
    username: "",
    password: "",
  });

  const { mutate, isLoading, isError, error } =
    useAccountLoginMutation(graphQLRequestClient);

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          await mutate(value);

          console.log(error);
        }}
      >
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={value.username}
            onChange={(event) =>
              setValue({ ...value, username: event.target.value })
            }
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={value.password}
            onChange={(event) =>
              setValue({ ...value, password: event.target.value })
            }
          />
        </div>
        {isError ? <p>Error</p> : <></>}
        {isLoading ? <p>Loading</p> : <></>}
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
