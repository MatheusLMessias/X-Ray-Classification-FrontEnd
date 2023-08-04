import ImageServiceInterface from "./ImageServiceInterface";

export default class ImageServiceMock implements ImageServiceInterface {
    async getImage(image: any) {
      return new Promise((resolve, reject) => {
      });
    }
  }