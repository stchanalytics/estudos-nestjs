import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // importa segurança

async function bootstrap() {

  const app = await NestFactory.create(AppModule); // Criação da Aplicação, NestFactory = constroi o servidor a partir do appmodule
  //Segurança global (pipe)
    //Qualquer dado que entrar na aplicação será validado aqui
    // whitelist: true -> Se mandarem campo "senha_admin" e ele não estiver no DTO, o Nest joga fora.
    // forbidNonWhitelisted: true -> Se mandarem lixo, o Nest barra e dá erro.
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }));
  await app.listen(process.env.PORT ?? 3000); //manter por padrão, no deploy a porta 3000 não é padrão, entao causaria erro no site
}
bootstrap();
