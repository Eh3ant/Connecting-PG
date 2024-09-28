// Routes for users of pg-intro-demo

const express = require("express");
const router = new express.Router();
const db = require('../db')


router.get('/', async (req, res) => {
    try {
        const results = await db.query(`SELECT * FROM users`)
        return res.json(results.rows)
    } catch {
        return next(e)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const { type } = req.query
        const result = db.query(`SELECT * FROM users WHERE type=$!`, [type])
        return res.json(result.rows)
    } catch (e) {
        return next(e)
    }

})











module.exports = router;