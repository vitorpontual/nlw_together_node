import { Request, Response } from "express";
import { ListTagsSerivce } from "../services/ListTagsService";



export class ListTagsController {

  async handle(resquest: Request, response: Response){

    const listTagsService = new ListTagsSerivce();

    
    const tags = await listTagsService.execute()

    return response.json(tags)

  }
}