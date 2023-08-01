import ImageServiceFactory from "./ImageService/ImageServiceFactory";

const SERVICES_VERSION = process.env.NODE_ENV === 'test' ? 'V3' : 'V1';

export const imageService = ImageServiceFactory.createImageService(SERVICES_VERSION);