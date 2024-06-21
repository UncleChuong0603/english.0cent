const { User } = require('../../models/User');

// Get user profile
exports.getProfile = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(401).json({
                status: "FAILED",
                message: "Unauthorized!"
            });
        }
        if (user._id.toString() !== userId) {
            return res.status(401).json({
                status: "FAILED",
                message: "Unauthorized!"
            });
        }
        res.json({
            status: "SUCCESS",
            user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "FAILED",
            message: "An error occurred while fetching the profile!"
        });
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    const userId = req.user.id;
    const { avatar, fullName, phoneNumber, target, timeSpending, introduction, dateOfBirth } = req.body;

    try {
        const updatedData = {
            avatar, 
            fullName,
            phoneNumber,
            target,
            timeSpending,
            introduction,
            dateOfBirth,
        };

        // Update the user's profile
        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true }).select('-password');
        if (!user) {
            return res.status(404).json({
                status: "FAILED",
                message: "User not found!"
            });
        }

        res.json({
            status: "SUCCESS",
            message: "Profile updated successfully!",
            user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "FAILED",
            message: "An error occurred while updating the profile!"
        });
    }
};
// Upgrade user plan
exports.upgradePlan = async (req, res) => {
    const userId = req.user.id;
    const { plan } = req.body;

    if (!['free', 'paid'].includes(plan)) {
        return res.status(400).json({
            status: "FAILED",
            message: "Invalid plan type!"
        });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                status: "FAILED",
                message: "User not found!"
            });
        }

        user.plan = plan;
        await user.save();

        res.json({
            status: "SUCCESS",
            message: `User plan upgraded to ${plan} successfully!`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "FAILED",
            message: "An error occurred while upgrading the plan!"
        });
    }
};

exports.updateAvatar = async (req, res) => {
    const userId = req.user.id;
    const { avatar } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                status: "FAILED",
                message: "User not found!"
            });
        }
        user.avatar = avatar;
        await user.save();
        res.json({
            status: "SUCCESS",
            message: "Avatar updated successfully!",
            user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "FAILED",
            message: "An error occurred while updating the avatar!"
        });
    }
}