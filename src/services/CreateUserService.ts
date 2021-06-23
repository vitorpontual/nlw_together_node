import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}
export class CreateUserService {
    async execute({ name, email, password, admin}: IUserRequest){
    const usersRepository =  getCustomRepository(UsersRepository);


    if(!email){
      throw new AppError("Email field empty")
    }
    
    const userAlreadyExists = await usersRepository.findOne({email})

    if(userAlreadyExists){
      throw new AppError("User already exists")
    }

    const user = usersRepository.create({
      name, email, password, admin
    })

    await usersRepository.save(user)

    return user;
  }
}