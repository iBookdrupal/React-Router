import {useParams, useLoaderData} from 'react-router-dom'
export default function CareerDetails(){
	const {id} = useParams()
	const career = useLoaderData()


	return(
		<div className='career-details'>
			<h2>Careers Details for {career.title}</h2>
			<p>Starting Salary:{career.salary}</p>
			<p>Location: {career.location}</p>
			<div className='details'>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic molestias corrupti, provident repellat iure at quam vero, dolorem quasi doloremque, quos omnis, excepturi. Ipsam dolor fuga rerum error incidunt.</p>
			</div>
		</div>
		)
}


//loader function
export const careerDetailsLoader = async ({params}) => {
	const {id} = params

	const res = await fetch('http://localhost:4000/careers/'+id)

	if (!res.ok){
		throw Error('Could not find the career')
	}
	return res.json()
}