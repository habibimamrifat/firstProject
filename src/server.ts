import app from './app';
import mongoose from 'mongoose';
import config from './config';

async function main() {
  try {
    await mongoose.connect(config.Database_Url as string);
    app.listen(config.port, () => {
      console.log(`Example app  port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
