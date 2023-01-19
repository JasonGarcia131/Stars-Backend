const Feedback = require("../model/Feedback");

const createFeedback = async (req, res) => {

    const feedback = req.body;

    if(feedback.length === 0) res.status(400).json({ 'message': 'Feedback is required.' });
    
    try {
        const results = await Feedback.create({
            "content": feedback.content
        });
        res.status(201).json({ 'success': `New feedback created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }

}

module.exports = { createFeedback };