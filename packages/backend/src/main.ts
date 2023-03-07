import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const PORT = 3030;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
}

bootstrap().then(() =>
  console.log(`Server listen at http://localhost:${PORT}`)
);
