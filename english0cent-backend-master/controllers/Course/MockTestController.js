const MockTest = require('../../models/Course/MockTest');

exports.createMockTest = async (req, res) => {
    const { title, questions, courseId } = req.body;
    try {
        const newMockTest = new MockTest({ title, questions, courseId });
        await newMockTest.save();
        res.status(201).json({ message: 'Mock test created successfully', mockTest: newMockTest });
    } catch (err) {
        res.status(500).json({ message: 'Error creating mock test', error: err.message });
    }
};

exports.getMockTest = async (req, res) => {
    const { mockTestId } = req.params;
    try {
        const mockTest = await MockTest.findById(mockTestId).populate('courseId');
        if (!mockTest) {
            return res.status(404).json({ message: 'Mock test not found' });
        }
        res.status(200).json(mockTest);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching mock test', error: err.message });
    }
};
