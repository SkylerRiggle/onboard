import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'
import ItemValidator from 'App/Validators/ItemValidator'

export default class ItemsController {
  /**
   * @name getAll
   * @description Get all items in the database
   *
   * @returns All items found in the database
   */
    public async getAll({response}: HttpContextContract) {
      //Get all items
      const items = await Item.all()

      //No items found case
      if (!items || items.length === 0) {
        return response.badRequest('No Items Found.')
      }

      //Return all items in the database
      return items
    }

  /**
   * @name get
   * @description Get an item with a specified id
   *
   * @returns An item with a specified id
   */
    public async get({response, request}: HttpContextContract) {
      //Get the item
      const item = await Item.findBy('id', request.param('id'))

      //Item not found case
      if (!item) {
        return response.badRequest('Item not found.')
      }

      //Return the found item
      return item.toJSON()
    }

  /**
   * @name create
   * @description Create a new item in the database
   *
   * @returns The new item
   */
    public async create({request}: HttpContextContract) {
      //Create the new item
      const data = await request.validate(ItemValidator)
      const newItem = await Item.create(data)

      //Save and return the new item data
      await newItem.save()
      return newItem.toJSON()
    }

  /**
   * @name edit
   * @description Edit an item in the database
   *
   * @returns The edited item
   */
    public async edit({response, request}: HttpContextContract) {
      //Get the item
      const item = await Item.findBy('id', request.input('id'))

      //Item not found case
      if (!item) {
        return response.badRequest('Item not found.')
      }

      //Overwrite the item's data and save it
      //Then return the new item data
      const data = await request.validate(ItemValidator)
      await item.merge(data).save()
      return item.toJSON()
    }

  /**
   * @name delete
   * @description Delete an item from the database
   *
   * @returns The deleted item
   */
    public async delete({response, request}: HttpContextContract) {
      //Get the item
      const item = await Item.findBy('id', request.input('id'))

      //Item not found case
      if (!item) {
        return response.badRequest('Item not found.')
      }

      //Delete the item and return its data
      await item.delete()
      return item.toJSON()
    }
}
