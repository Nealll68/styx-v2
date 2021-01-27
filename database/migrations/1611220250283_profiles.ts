import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
  protected tableName = 'profiles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)

      table.string('name').unique().notNullable()
      table.boolean('is_default').defaultTo(false)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
