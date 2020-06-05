const pool = require('./pool');
const table = 'tb_band_main';

const bands = {
  sortBand: async (page) => {
    const query = `SELECT * FROM ${table} ORDER BY "CREATE_DE" limit ${page}, 5`
    return await pool.queryParam(query);
  },
  recommend: async (page) => {
    const query = `SELECT * FROM ${table} limit ${page}, 5`
    return await pool.queryParam(query);
  }
}

module.exports = bands;