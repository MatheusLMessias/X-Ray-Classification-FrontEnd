import ImageServiceInterface from "./ImageServiceInterface";

export default class ImageServiceMock implements ImageServiceInterface {
    async getImage(receipt: string): Promise<any> {
      return new Promise((resolve, reject) => {
      });
    }
  }