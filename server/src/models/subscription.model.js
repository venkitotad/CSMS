import pool from "../db/index.js";

export const createSubscription = async (subscriptionData) => {
    try {
        const { user_id, plan_id, start_date, end_date, payment_method, payment_status, is_active } = subscriptionData;
        
        const query = `
            INSERT INTO subscription(
                user_id, 
                plan_id, 
                start_date, 
                end_date, 
                payment_method, 
                payment_status, 
                is_active, 
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
            RETURNING *;
        `;
        
        const values = [user_id, plan_id, start_date, end_date, payment_method, payment_status, is_active];
        
        const result = await pool.query(query, values);
        return result.rows[0];
        
    } catch (error) {
        console.error('Error creating subscription:', error);
        throw new Error(`Failed to create subscription: ${error.message}`);
    }
};