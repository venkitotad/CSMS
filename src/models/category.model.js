import pool from "../db/index.js";

export const category = async (name) => {
    const result = await pool.query(`INSERT INTO category(category_name) VALUES($1)`,
    [name]
)
return result.rows[0];

}