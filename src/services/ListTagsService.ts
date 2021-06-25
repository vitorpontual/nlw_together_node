import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";
import { classToPlain } from "class-transformer";


export class ListTagsSerivce {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository)

    let tags = await tagsRepository.find();

    return classToPlain(tags);
  }
}