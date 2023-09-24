import { Button } from "../components";

const SignUp = () => {
  return (
    <section id="sign-up" className="flex max-lg:flex-col w-full max-container justify-between items-center gap-10">
      <h3 className="heading-three">Sign up for our newsletter!</h3>
      <div className="w-full lg:max-w-[40%] border border-slate-500 rounded-full flex items-center justify-between gap-5 p-2.5">
        <input type="text" placeholder="example@email.com" className="h-8 w-[50%] md:w-[60%] lg:w-[55%]" />
        <Button label="Sign Up"/>
      </div>
    </section>
  )
}

export default SignUp;