import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository } from "../repositories/UsersRepository";


interface IComplementRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

export class CreateComplimentsService {
  async execute({tag_id, user_receiver, user_sender, message}: IComplementRequest){
    const complimentsRepository = getCustomRepository(ComplimentsRepository)
    const usersRepository = getCustomRepository(UsersRepository)

    if(user_sender === user_receiver){
      throw new Error("Incorrect User Receiver")
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver)

    if(!userReceiverExists){
      throw new AppError('User Receiver does not exists!')
    }
    
    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepository.save(compliment)

    return compliment
  }
}