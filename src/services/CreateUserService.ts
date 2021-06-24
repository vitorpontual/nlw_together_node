import { hash } from "bcryptjs";
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
    async execute({ name, email, password, admin = false}: IUserRequest){
    const usersRepository =  getCustomRepository(UsersRepository);

    const nameCap = name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))

    const passHash = await hash(password, 8)


    if(!email){
      throw new AppError("Email field empty")
    }
    
    const userAlreadyExists = await usersRepository.findOne({email})

    if(userAlreadyExists){
      throw new AppError("User already exists")
    }

    const user = usersRepository.create({
      name: nameCap, email, password: passHash, admin
    })

    await usersRepository.save(user)


    return user;
  }
}