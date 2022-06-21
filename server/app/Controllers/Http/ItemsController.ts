import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'
import ItemValidator from 'App/Validators/ItemValidator'

export default class ItemsController {
    public async getAll({response}: HttpContextContract) {
        const items = await Item.all()

        if (!items || items.length === 0) {
            return response.badRequest('No Items Found.')
        }

        return items
    }

    public async get({response, request}: HttpContextContract) {
        const item = await Item.findBy('id', request.param('id'))

        if (!item) {
            return response.badRequest('Item not found.')
        }

        return item.toJSON()
    }

    public async create({request}: HttpContextContract) {
        const data = await request.validate(ItemValidator)
        const newItem = await Item.create(data)

        await newItem.save()
        return newItem.toJSON()
    }

    public async edit({response, request}: HttpContextContract) {
        const item = await Item.findBy('id', request.input('id'))

        if (!item) {
            return response.badRequest('Item not found.')
        }

        const data = await request.validate(ItemValidator)
        await item.merge(data).save()
        return item.toJSON()
    }

    public async delete({response, request}: HttpContextContract) {
        const item = await Item.findBy('id', request.input('id'))

        if (!item) {
            return response.badRequest('Item not found.')
        }

        await item.delete()
        return item.toJSON()
    }
}
