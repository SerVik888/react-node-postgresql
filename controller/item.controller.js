const db = require('../db')

class ItemController {
  async creatItem(req, res) {
    const { dataCreat, title, quantity, distance } = req.body
    const newItem = await db.query(
      'INSERT INTO tableSPA (dataCreat, title, quantity, distance) values ($1, $2, $3, $4) RETURNING *',
      [dataCreat, title, quantity, distance]
    )
    res.json(newItem.rows[0])
  }
  async getItem(req, res) {
    const items = await db.query('SELECT * FROM tableSPA')
    res.json(items.rows)
  }
  async getOneItem(req, res) {
    const id = req.params.id
    const item = await db.query('SELECT * FROM tableSPA where id = $1', [id])
    res.json(item.rows[0])
  }
  async updateItem(req, res) {
    const { id, dataCreat, title, quantity, distance } = req.body
    const item = await db.query(
      'UPDATE tableSPA set dataCreat = $1, title = $2, quantity = $3, distance = $4 where id = $5 RETURNING *',
      [dataCreat, title, quantity, distance, id]
    )
    res.json(item.rows[0])
  }
  async deleteItem(req, res) {
    const id = req.params.id
    const item = await db.query('DELETE FROM tableSPA where id = $1', [id])
    res.json(item.rows[0])
  }
}

module.exports = new ItemController()
