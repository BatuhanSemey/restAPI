const Data = require('../models/data')
const createPath = require('../helpers/create-path');

let data = [
    {
        id: 1,
        name: 'Batuhan',
        position: 'sysadmin',
        completed: false,
    }
];

const getMain = (req, res) => {
    res.render(createPath('index'));
};

const getData = (req, res) => {
    res.json(data);
};

const postData = (req, res) => {
    const { name, position } = req.body;

    if (name && position) {
        const newItem = { id: data.length + 1, name, position, completed: false };
        data.push(newItem);
        res.status(201).json(newItem);
    } else {
        res.status(400).json({ message: 'Ошибка при отправке данных' });
    }
};

const deleteData = (req, res) => {
    const index = parseInt(req.params.index, 10);

    if (index >= 0 && index < data.length) {
        const deletedItem = data.splice(index, 1);
        res.json(deletedItem);
    } else {
        res.status(404).json({ message: 'Элемент не найден' });
    }
};

const updateData = (req, res) => {
    const index = parseInt(req.params.index, 10);

    if (index >= 0 && index < data.length) {
        data[index].completed = true;
        res.json(data[index]);
    } else {
        res.status(404).json({ message: 'Элемент не найден' });
    }
};

module.exports = {
    getMain,
    getData,
    postData,
    deleteData,
    updateData
};