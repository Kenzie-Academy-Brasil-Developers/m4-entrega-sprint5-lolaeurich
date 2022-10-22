import { Request, Response } from "express"

//importando meu service:
import { loginService } from "../../services/login/login.service"


const loginController = async (request: Request, response: Response) => {

    //usamos email e senha para a requisição de login:
    const {email, password} = request.body

    //criamos um token para o login:
    const token = await loginService(email, password)

    return response
        .status(200)
        .json(token)
}

export default loginController