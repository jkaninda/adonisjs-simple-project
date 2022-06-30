 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public async index ({ request, response }: HttpContextContract) {
        return response.send('Hello world')
    }
}

