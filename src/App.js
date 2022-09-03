import logo from './logo.svg';
import './App.css';
import {al_baqarah_text} from './text.js';
import {para_al_baqarah} from './text.js';


// function ParaAlBaqarahText(){
//   return (
//     <div className=".text">
//       {para_al_baqarah}
//     </div>
//   );
// }

function AlBaqarahText(){
  return (
    <div className=".text">
      {al_baqarah_text}
    </div>
  );
}
function App() {
  return (

    <div className="App">
      al-baqrah
      <a href='https://quran.com/2'>Al-bagqrah quran.com</a>
      <br/>

      {/* https://open.spotify.com/show/2g8Z0qD7fV6B0qXE3rh0j0 */}
      <a href='https://open.spotify.com/show/2g8Z0qD7fV6B0qXE3rh0j0'>Spotify al-baqrah </a>
      <br/>
      {/* <ParaAlBaqarahText/> */}
      {/* <AlBaqarahText/> */}
    </div>
  );
}

export default App;
