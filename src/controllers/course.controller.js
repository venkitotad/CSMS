import { course } from "../models/course.model.js";

export const createCourse = async (req, res) => {
    try {
        
        const {name, description} = req.body;
        
        if(!name || !description){
            return res.status(409).json({message:'all feilds are required'});
        }
        
        const newCourse = await course(name, description);
        
        res.status(200).json({
            message:'course add successful',
            newCourse
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'server error sry '})
        
    }
}