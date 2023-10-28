import ImageServiceInterface from "./ImageServiceInterface";
import ImageServiceMock from "./ImageServiceMock";
import ImageServiceV1 from "./ImageServiceV1";

export default class ImageServiceFactory {
    static createImageService(version: string): ImageServiceInterface {
      return version === 'V1' ? new ImageServiceV1() : new ImageServiceMock();
    }
  }