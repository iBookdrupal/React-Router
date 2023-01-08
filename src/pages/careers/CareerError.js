import {useRouteError, Link} from 'react-router-dom'

export default function CareerError(){
	const error = useRouteError();

	return(
		<div className='careers-error'>
			<h2>Error</h2>
			<p>{error.message}</p>
			<Link to='/careers'>Back to Homepage</Link>


		</div>

		)
}