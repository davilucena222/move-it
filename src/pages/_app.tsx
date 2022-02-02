import '../styles/global.css';

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengeContext';

function MyApp({ Component, pageProps }) {
  //Aqui ficam informações que estarão presentes em várias telas da aplicação. Como 
  //o ChallengesProvider, já o CountdownProvider só tem informações que ficam presentes
  //em apenas uma tela, e pode ser colocado dentro da index.
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
