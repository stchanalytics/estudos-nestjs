import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable() -> Esse adesivo avisa o NestJS:
// "Ei, eu sou uma classe útil! Se alguém (tipo o Controller) me pedir no construtor, pode me entregar."
// Sem isso, a Injeção de Dependência não funciona.
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    // AQUI VIVE A LÓGICA
    // É aqui que você calcularia impostos, chamaria o banco de dados, mandaria e-mail de boas-vindas.
    // Por enquanto, só retornamos uma string.
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
