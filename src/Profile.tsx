import { useContext } from 'react';
import { TranslationContext } from '../contexts/translationContext';
import { UserContext } from '../contexts/userContext';

function Profile() {
  const translation = useContext(TranslationContext);
  const currentUser = useContext(UserContext);

  if (!translation) {
    return null;
  }

  return <h1>{translation.greeting} {currentUser?.name}</h1>
}

export default Profile
