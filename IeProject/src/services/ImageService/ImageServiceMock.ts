import ImageServiceInterface from "./ImageServiceInterface";

export default class ImageServiceMock implements ImageServiceInterface {
    async postImage(image: any) {
      return new Promise((resolve, reject) => {
      });
    }
  }