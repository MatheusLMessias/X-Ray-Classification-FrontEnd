import ImageServiceInterface from "./ImageServiceInterface";

export default class ImageServiceV1 implements ImageServiceInterface {
    async getImage(props: any) {
      console.log('Service' + props.age + props.username + props.date + props.name + props.image)
      return new Promise((resolve, reject) => {
        fetch("http://127.0.0.1:5000/image/classify", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: props.username,
            age: props.age,
            date: props.date,
            name: props.name,
            image: props.image,
          }),
        })
        .then(res => res.json())
                  .then(data => {
                    console.log("resposta service" + data)
                    props.info(data)
                    
                  })
        .catch(error => console.warn(error));
      });
    }
  }