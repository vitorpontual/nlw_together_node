import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import auth from "../config/auth";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../repositories/UsersRepository";


interface IAuthenticateRequest {
  email: string;
  password: string;
}
export class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne({email})

    if(!user){
      throw new AppError('Email/Password incorrect')
    }

    const pass = await compare(password, user.password)

    if(!pass){
      throw new AppError('Email/Password incorrect')
    }

    const token = sign({
      email: user.email
    }, auth.jwt_secret, {
      subject: user.id,
      expiresIn: auth.expires_token
    })

    return token
    
  }
}