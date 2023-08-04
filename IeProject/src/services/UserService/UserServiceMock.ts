import UserServiceInterface from "./UserServiceInterface";

export default class UserServiceMock implements UserServiceInterface {
    async createUser(image: any) {
      return new Promise((resolve, reject) => {
      });
    }
    async loginUser(image: any) {
      return new Promise((resolve, reject) => {
      });
    }
  }