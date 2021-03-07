import { useForm } from "react-hook-form";
import Button from "../Layout/Button";
import Input from "../Layout/Input";

interface Props {}

const Signup: React.FC<Props> = () => {
  const { register, errors, handleSubmit } = useForm<{
    username: string;
    email: string;
    password: string;
  }>();

  const handleSignup = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <div className="backdrop" />
      <div className="modal modal--auth-form">
        <div className="modal-close">&times;</div>

        <h3 className="header--center paragraph--orange">
          Sign up to ServerlessEcom
        </h3>

        <form className="form" onSubmit={handleSignup}>
          <Input label="username" error={errors.username?.message} ref={} />
          {/* <div className="form__input-container">
            <label htmlFor="username" className="form__input-label">
              Username
            </label>
            <input
              ref={register({
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be atleast 3 characters long.",
                },
                maxLength: {
                  value: 20,
                  message: "Username must not be greater than 20 characters.",
                },
              })}
            />
            {errors.username?.message && (
              <p className="paragraph paragraph--error-small">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="form__input-container">
            <label htmlFor="email" className="form__input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="input"
            />
          </div>
          <div className="form__input-container">
            <label htmlFor="password" className="form__input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              className="input"
            />
          </div> */}

          <Button width="100%" style={{ marginTop: "0.5rem" }}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Signup;
