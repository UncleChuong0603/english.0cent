const FinalTest = require('../../models/Course/FinalTest');

exports.createFinalTest = async (req, res) => {
    const { title, questions, courseId } = req.body;
    try {
        const newFinalTest = new FinalTest({ title, questions, courseId });
        await newFinalTest.save();
        res.status(201).json({ message: 'Final test created successfully', finalTest: newFinalTest });
    } catch (err) {
        res.status(500).json({ message: 'Error creating final test', error: err.message });
    }
};

exports.getFinalTest = async (req, res) => {
    const { finalTestId } = req.params;
    try {
        const finalTest = await FinalTest.findById(finalTestId).populate('courseId');
        if (!finalTest) {
            return res.status(404).json({ message: 'Final test not found' });
        }
        res.status(200).json(finalTest);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching final test', error: err.message });
    }
};
