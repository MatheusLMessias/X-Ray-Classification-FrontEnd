import ImageServiceInterface from './ImageServiceInterface';

export default class ImageServiceV1 implements ImageServiceInterface {
  async getImage(props: any) {
    fetch('http://10.0.2.2:5000/image/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 82,
        username: props.username,
        age: props.age,
        name: props.name,
        date: props.date,
        image: props.image,
      }),
    })
      .then(res => res.json())
      .then(data => {
        props.info(data);
      })
      .catch(error => console.warn(error));
  }
}
