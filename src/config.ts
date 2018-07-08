const mongoDbUrl = process.env.MONGODB_URL;
const port = process.env.PORT || 3000;

export const config = {
  mongoDbUrl,
  port,
};
