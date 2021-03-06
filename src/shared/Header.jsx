import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.css';

// function HeaderComponent() {
//   const [state, setState] = React.useState(false);
//   return (
//     <header>
//       <h1>Hmr example</h1> 
//       <button onClick={() => setState(!state)}>
//         {state ? 'hide' : 'show'}
//       </button>
//       {state && <h3>Here i'm</h3>}
//       <p>
//         It replace code wethout page reloading
//       </p>
//     </header>  
//   );
// }

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.example}>Reddit for our own</h1>     
    </header>      
  );
}

export const Header = hot(HeaderComponent);