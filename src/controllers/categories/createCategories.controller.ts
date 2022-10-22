import { Request, Response } from "express"

//importando meus services:
import { createCategoriesService } from "../../services/categories/createCategories.service"

//importando minha interface de categoirias:
import { ICategoryRequest } from "../../interfaces/categories"


const createNewCategoriesController = async (request: Request, response: Response) => {

    const {name}:ICategoryRequest = request.body

    const output = await createCategoriesService({name})

    return response
        .status(201)
        .json(output)

}

export default createNewCategoriesController