const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
  console.info('********************');
  console.info(message);
  console.info('********************');
};

export default {
  mongodbUri: 'mongodb://roshanbin:naming-contests-roshanbin@ds155315.mlab.com:55315/naming-contests-roshanbin',
  port: env.PORT || 8080,
  host: env.HOST || '127.0.0.1',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};