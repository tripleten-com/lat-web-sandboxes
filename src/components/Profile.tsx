import { useState, useEffect } from 'react';

interface UserData {
  name: string;
  email: string;
}

interface ProfileProps {
  id: string | number ;
}

const Profile = ({ id }: ProfileProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!res.ok) {
          throw new Error('Error en la petición.');
        }

        const data: UserData = await res.json();
        
        setName(data.name);
        setEmail(data.email);

      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();

    return () => {
      console.log('Component has unmounted!');
    };
  });

  return (
    <div>
      <h2>Nombre: {name}</h2>
      <p>Correo: {email}</p>
    </div>
  );
};

export default Profile;