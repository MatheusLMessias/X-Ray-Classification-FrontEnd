import ImageServiceInterface from "./ImageServiceInterface";

export default class ImageServiceV1 implements ImageServiceInterface {
    async getImage(image: any) {
      return new Promise((resolve, reject) => {
        fetch("http://127.0.0.1:5000/image/classify", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(image)
        })
        .catch(error => console.warn(error));
        // try {
        //     fetch("http://127.0.0.1:5000/image/classify", {
        //         method:'POST',
        //         headers: {
        //           'Accept' : 'application/json',
        //         },
        //         body: image
        //       })
        //         .then(res => res.json())
        //           .then(data => {
        //             // props.setWorkBrandId(data[0]);
        //             // props.setMark(data[1]);
        //           })
        //           //.catch(error => console.warn(error));
        // } catch (error) {
        //   reject(error);
        // }
      });
    }
  }