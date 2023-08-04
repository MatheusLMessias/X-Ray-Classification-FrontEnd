import ImageServiceFactory from "./ImageService/ImageServiceFactory";
import UserServiceFactory from "./UserService/UserServiceFactory";

//const SERVICES_VERSION = process.env.NODE_ENV === 'test' ? 'V3' : 'V1';
const SERVICES_VERSION = 'V1';

export const imageService = ImageServiceFactory.createImageService(SERVICES_VERSION);
export const userService = UserServiceFactory.UserService(SERVICES_VERSION);