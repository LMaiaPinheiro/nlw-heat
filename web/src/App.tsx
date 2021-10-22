import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { MessagerList } from './components/MessagerList';
import { useContext } from 'react';
import { AuthContext } from './contexts/auth';
import { SendMessageForm } from './components/SendMessageForm/index';

export function App() {

  const { user } = useContext(AuthContext);

  
  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned :''}`}>
      <MessagerList />
      {!! user? <SendMessageForm/> : <LoginBox/>}
    </main>
  )
}


