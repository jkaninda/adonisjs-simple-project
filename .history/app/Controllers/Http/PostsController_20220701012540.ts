 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

export default class PostsController {
    public async index ({ request, response }: HttpContextContract) {
        return View.render('posts.index')
    }
}

