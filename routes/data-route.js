const express = require('express');
const router = express.Router();

const {
    getMain,
    getData,
    postData,
    deleteData,
    updateData
} = require('../backend/controllers/data-controller');

router.get('/', getMain);
router.get('/api/items', getData);
router.post('/api/items', postData);
router.delete('/api/items/:index', deleteData);
router.put('/api/items/:index', updateData);

module.exports = router;