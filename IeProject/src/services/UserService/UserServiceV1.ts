import UserServiceInterface from './UserServiceInterface';

export default class UserServiceV1 implements UserServiceInterface {
  async createUser(props: any) {
    const response = fetch('http://10.0.2.2:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: props.nome,
        email: props.email,
        senha: props.senha
      }),
    })
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(error => console.warn(error));
      return response
  }
}
