import  express  from "express";

import { FoodModel } from "../../database/food";
import { validateCategory, validateId } from "../../validation/common.validation";

const Router =  express.Router();

/**
 * Route        /:_id
 * Description  Get food based on id
 * params        _id
 * Access       Public
 * Method       Get
 */

Router.get('/:_id', async (req,res) => {
    try {
        const {_id} = req.params;
        await validateId(req.params);

        const foods = await FoodModel.findById(_id);
        return res.json({foods});
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
});


/**
 * Route        /r/:_id
 * Description  Get all food based on particular restaurant
 * params        _id
 * Access       Public
 * Method       Get
 */
Router.get('/r/:_id', async (req,res) => {
    try {
        const {_id} = req.params;
        await validateId(req.params);
        const foods = await FoodModel.find({
            restaurant: _id,
        });
        // task: food not found return stmt
        return res.json({ foods });

    }catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/**
 * Route        /c/:category
 * Description  Get all food based on particular category
 * params        category
 * Access       Public
 * Method       Get
 */
 Router.get('/c/:category', async (req,res) => {
    try {
        const {category} = req.params;
        await validateCategory(req.params);
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i"},
        });

        if (!foods) return res.status(404).json({
            error: `No food matched with ${category}`
        });


        return res.json({ foods });

    }catch (error) {
        return res.status(500).json({ error: error.message });
    }
});





export default Router;