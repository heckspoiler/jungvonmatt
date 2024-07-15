import { mailStore } from '../../../../../stores/mailStore';
import { useStore } from 'zustand';

export default function Email() {
  const isSent = useStore(mailStore).isSent;
  const name = useStore(mailStore).name;
  const email = useStore(mailStore).email;
  const message = useStore(mailStore).message;

  useEffect(() => {
    console.log('from email', name, email, message, isSent);
  }, []);
}

Email();
