import {Outlet, NavLink} from 'react-router-dom'
export default function HelpLayout(){
	return(
		<div className='help-layout'>
			<h2>Help Website</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt provident ipsam.</p>


			<nav>
				<NavLink to='faq'>View the FAQ</NavLink>

				<NavLink to='contact'>Contact Us</NavLink>
			</nav>


			<Outlet/>

		</div>
		)
}