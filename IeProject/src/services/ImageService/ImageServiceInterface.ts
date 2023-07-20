export default interface ImageServiceInterface {
    getImage(receipt: string): Promise<any>;
  }