import pool from "../db/index.js";

export const course = async (name, description) => {
    const result = await pool.query(
        `INSERT INTO course(course_name, description) VALUES($1, $2) RETURNING *`,
        [name, description]
    );
    
    return result.rows[0];
};

export const getAllCourse = async() =>{
    
}
