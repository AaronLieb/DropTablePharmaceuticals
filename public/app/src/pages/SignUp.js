import './Login.css';

const SignUp = () => {
  return (
	<div className="box">
	  <h2> Sign Up </h2>
	  <form>
		<label> username: </label>
		<input type="text" name="username"/>
		<label> password: </label>
		<input type="password" name="password"/>
		<label> I am a: </label>
		<div class="horizontal">
			<label> Patient </label>
			<input type="radio" name="accounttype" value="patient" checked="checked"/>
			<label> Doctor </label>
			<input type="radio" name="accounttype" value="doctor"/>
		</div>
	    <input type="submit" />
	  </form>
	</div>
  );
};

export default SignUp;

