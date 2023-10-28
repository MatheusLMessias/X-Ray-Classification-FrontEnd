import ImageServiceInterface from "./ImageServiceInterface";

export default class ImageServiceMock implements ImageServiceInterface {
    async postImage(props: any) {
      return new Promise((resolve, reject) => {
      });
    }
    async historyImage(props: any) {
      return new Promise((resolve, reject) => {
      });
    }
    async getImage(props: any) {
      return new Promise((resolve, reject) => {
      });
    }
  }