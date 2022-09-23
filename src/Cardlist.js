import Artwork from './Artwork';
import Card from './Card';

const CardList = ({Artwork}) =>{

	const cardcomponent = Artwork.map((user, i) => {
		return <Card id={Artwork[i].id} name={Artwork[i].name} />
	})
	return( 
		<div>

			{cardcomponent}

		</div>
	);	
}

export default CardList;