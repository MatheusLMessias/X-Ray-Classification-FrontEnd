import ImageServiceInterface from './ImageServiceInterface';

export default class ImageServiceV1 implements ImageServiceInterface {
  async postImage(props: any) {
    const response = fetch('http://10.0.2.2:5000/image/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: props.user_id,
        username: props.username,
        age: props.age,
        name: props.name,
        date: props.date,
        image: props.image,
      }),
    })
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(error => console.warn(error));
      return response
  }

  async historyImage(props: any) {
    const url = `http://10.0.2.2:5000/image/classifications/${props.user_id}`
    const response = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(error => console.warn(error));
      return response
  }
}
