
import a from './P1.jpg'
import b from './P2.jpg'
import c from './P3.jpg'
import Artwork from './Artwork'

function Card(props) {
  return (

  	<div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5' >
  		<img alt='Calligraphy' src={a} width="300" height="350"/>
 	    <div>
		    <h2>{props.id}</h2>
		    <p>{props.name}</p>
	    </div>
	</div>
  );
}

export default Card;
