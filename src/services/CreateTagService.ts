import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { TagsRepository } from "../repositories/TagsRepository";


export class CreateTagService {

  async execute(name: string){
    const tagsRepository = getCustomRepository(TagsRepository)

    if(!name){
      throw new AppError("Incorrect Name")
    }

    // SELECT * FROM TAGS WHERE name = ${name}
    const tagAlreadyExists = await tagsRepository.findOne({ name })


    if(tagAlreadyExists){
      throw new AppError('Name already exists')
    }

    const tag = tagsRepository.create({
      name
    })

    console.log(tag)

    await tagsRepository.save(tag)

    return tag

  }
}