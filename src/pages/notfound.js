import {Link} from 'react-router-dom'


export default function NotFound(){
	return(
		<div>
			<h2>Page Not Found</h2>
			<p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Rem temporibus ea cumque hic deserunt qui quibusdam quam saepe, et. Eaque ipsam reiciendis at ad voluptates rerum modi nam doloremque quisquam!</p>

			<p>Go to <Link to='/'>Homepage</Link></p>
		</div>
	)
}