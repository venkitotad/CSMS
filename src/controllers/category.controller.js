import { category } from "../models/category.model.js";

export const createCategory = async (req, res) => {
    try {
        
        const {name} = req.body;
        
        if(!name){
            return res.status(400).json({message:'category name is required'})
        }
        
        const newCategory = await category(name);
        
        res.status(200).json({
            message:'category added',
            newCategory
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'server error'})
    }
}