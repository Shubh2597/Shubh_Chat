import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const projectID = "7da92e21-b548-4e56-b66e-353be0d25ecf";
const App = () => {

 if (!localStorage.getItem('username')) return <LoginForm />;


 return (
  <ChatEngine
   
  height="100vh"
  projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
   onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
 )
}

export default App;