import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({

  controllers: [UsersController], // controllers: Quem atende o telefone/porta?
  providers: [UsersService], // providers: Quem trabalha nos bastidores e pode ser injetado?
                             // Se você esquecer de colocar o Service aqui, o Nest vai dar erro dizendo que não sabe quem é UsersService.
})
export class UsersModule {}


/*Por que separar em Controller e Service?

Para o Controller não virar uma bagunça. Se você quiser mudar de Banco de Dados SQL para MongoDB, você só mexe no Service. O Controller (que lida com HTTP) nem fica sabendo.

Por que usar DTO?

Para ter certeza absoluta do que está entrando na sua API. É o contrato de segurança.

Por que Injeção de Dependência (Constructor)?

Para sua classe não ficar presa criando instâncias (new Service()). Isso facilita testes (você pode injetar um Service falso) e gestão de memória. */