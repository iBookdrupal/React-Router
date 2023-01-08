export default function Contact(){
	return(
		<div className='contact'>
			<h3>Contact Us</h3>

			<form>
				<label htmlFor="email">
					<span>Your Email</span>
					<input type="email" name='email' placeholder='yourname@email.com' required />

				</label>


				<label htmlFor="message">
					<span>Your Message</span>
					
					<textarea name="message" id="" cols="30" rows="10" placeholder='Your message'></textarea>

				</label>

				<button type='submit'>Submit</button>

			</form>
		</div>
		)
}