import { Request, Response} from "express"

//services
import { deleteUsersService } from "../../services/users/deleteUsers.service"

const deleteAUsersController = async (request: Request, response: Response) => {

    const { id } = request.params

    await deleteUsersService(id)

    return response
        .status(204)
        .send()
}

export default deleteAUsersController 