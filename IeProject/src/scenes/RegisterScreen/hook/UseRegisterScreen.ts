import {useState} from 'react';

const UseRegisterScreen = () => {
  const [name, setName] = useState<String>('');
  const [newEmail, setNewEmail] = useState<String>('');
  const [newPassword, setNewPassword] = useState<String>('');

  return {
    name,
    newEmail,
    newPassword,
    setName,
    setNewEmail,
    setNewPassword,
  };
};

export default UseRegisterScreen;
