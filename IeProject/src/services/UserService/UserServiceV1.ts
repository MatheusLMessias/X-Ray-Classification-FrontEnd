import UserServiceInterface from './UserServiceInterface';

export default class UserServiceV1 implements UserServiceInterface {
  async createUser(props: any) {
    fetch('http://10.0.2.2:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    })
      .then(res => res.json())
      .then(data => {
        props.info(data);
      })
      .catch(error => console.warn(error));
  }
}
