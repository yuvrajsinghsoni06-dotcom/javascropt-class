import Card from './card.jsx'
import Button from './button.jsx'
import Students from './student.jsx'
import UserGreeting from './useergreeting.jsx';

function App() {
  return(
    <>
    <UserGreeting isLoggedIn={true} username="yuvraj"/>
    </>
  );
}

export default App