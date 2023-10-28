import UserServiceInterface from "./UserServiceInterface";
import UserServiceMock from "./UserServiceMock";
import UserServiceV1 from "./UserServiceV1";

export default class UserServiceFactory {
    static UserService(version: string): UserServiceInterface {
      return version === 'V1' ? new UserServiceV1() : new UserServiceMock();
    }
  }