import { useContext } from 'react'
import { TranslationContext } from './contexts/TranslationContext'
import { UserContext } from './contexts/CurrentUserContext';

function Profile() {
  const translation = useContext(TranslationContext);
  const currentUser = useContext(UserContext);

  console.log(translation);
  
  return <h1>{`${translation?.greeting} ${currentUser?.name}`}</h1>
}

export default Profile