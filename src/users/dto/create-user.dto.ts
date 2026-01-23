import { IsString, IsNotEmpty, IsEmpty } from 'class-validator'
export class CreateUserDto {
    //Decorators (@)
    // São metadados. Não alteram o valor da varável, mas avisa o "ValidationPipe" como conferir esse campo
    @IsString() // tem que ser texto
    @IsEmpty() // nao deixa passar se estiver vazio (NOTNULL)
    name: string;

    @IsString()
    cargo: string;
}

