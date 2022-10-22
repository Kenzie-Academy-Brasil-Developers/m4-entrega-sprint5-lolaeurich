import { Request, Response } from "express"

//importando meus services:
import { getCategoryPropertiesService } from "../../services/categories/getCategoryProperties.service"

const getCategoryByPropertiesController = async (request: Request, response: Response) => {

    const {id} = request.params

    const output = await getCategoryPropertiesService(id)

    return response
        .status(200)
        .json(output)
}

export default getCategoryByPropertiesController 