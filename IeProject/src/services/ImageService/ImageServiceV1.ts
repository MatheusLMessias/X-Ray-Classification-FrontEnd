import ImageServiceInterface from "./ImageServiceInterface";

export default class ImageServiceV1 implements ImageServiceInterface {
    async getImage(receipt: string): Promise<any> {
      return new Promise((resolve, reject) => {
        try {
            fetch("http://127.0.0.1:5000/image/classify", {
                method:'POST',
                headers: {
                  'Accept' : 'application/json',
                }
              })
                .then(res => res.json())
                  .then(data => {
                    // props.setWorkBrandId(data[0]);
                    // props.setMark(data[1]);
                  })
                  //.catch(error => console.warn(error));
        } catch (error) {
          reject(error);
        }
      });
    }
  }