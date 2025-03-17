const { Message } = require('../models');

exports.createMessage =  async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.status(201).json(message);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.findAllMessage = async (req,res) => {
    try {
        const message = await Message.findAll();
        res.status(200).json(message);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
};

exports.findOneMessage = async (req,res) => {
    try {
        const message = await Message.findByPk(req.params.id);
        if (!message) {
            res.status(404).json({message : 'Aucun message trouvé'})
        } else{
            res.status(200).json(message)
        }
    } catch (error) {
        res.status(400).json({message : error.message});
    }
};

exports.updateMessage = async (req,res) => {
    try {
        const message = await Message.findByPk(req.params.id);
        if (message) {
            await message.update(req.body);
            res.status(200).json(message);
        } else {
            res.status(404).json({error : 'Message non trouvé'});
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteMessage = async (req,res) => {
    try {
        const message = await Message.findByPk(req.params.id);
        if (message) {
            await message.destroy();
            res.status(204).send();
        }  else {
            res.status(404).json({error : 'Message non trouvé'});
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};