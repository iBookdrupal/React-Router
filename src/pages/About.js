import {useState} from 'react'
import {Navigate} from 'react-router-dom'
export default function About(){
	const [user, setUser] = useState('joseph')

	if(!user){
		return <Navigate to='/' replace={true} />
	}
	return(
		<div className='about'>
			<h2>About Us </h2>
			<p>Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Voluptates recusandae minus inventore error quas blanditiis nemo ab harum dolorem aut cupiditate beatae iste facilis repellendus quam, dolorum neque temporibus quis?
			</p>

			<p>Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Voluptates recusandae minus inventore error quas blanditiis nemo ab harum dolorem aut cupiditate beatae iste facilis repellendus quam, dolorum neque temporibus quis?
			</p>

			<button type='button' onClick={() => setUser(null)}>Logout</button>

		</div>
		)
}