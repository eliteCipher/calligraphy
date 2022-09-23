import Cardlist from './Cardlist';
import {Artwork} from './Artwork';


const App = () => {
  return (
      <div className= 'tc'>
        <h1> Lubna Calligraphy </h1>
        <Cardlist Artwork={Artwork} />
      </div>
    );
}

export default App;