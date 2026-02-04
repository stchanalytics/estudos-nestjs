import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') 
  //INJEÇÃO DE DEPENDÊNCIA (A Mágica)
  // O Controller diz: "Eu não sei salvar no banco, preciso de um especialista (Service)."
  // O 'private readonly' cria uma propriedade na classe automaticamente.
  // O NestJS lê isso e, quando cria o Controller, já coloca o Service pronto ali dentro.
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  // @Post() -> Define que esse método responde ao verbo HTTP POST.
  create(@Body() createUserDto: CreateUserDto) {
    // @Body() -> É um extrator. Ele pega o JSON que veio no corpo da requisição
    // e tenta encaixar no formato do 'CreateUserDto'.
    
    // Se chegou aqui, os dados JÁ ESTÃO VALIDADOS.
    // O Controller não pensa, ele só delega para o especialista (Service).
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
