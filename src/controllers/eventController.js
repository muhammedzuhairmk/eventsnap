const catchAsyncError = require("../utils/catchAsyncError");
const Event = require("../models/event.model");
const AppError = require("../utils/appError");
const { createEventSchema } = require("../validations/event.schema");

module.exports = {
    addEvent: catchAsyncError(async (req, res, next) => {
        const { _, error } = createEventSchema.validate(req.body);
        if (error) {
            return next(
                new AppError(error.details ? error?.details[0]?.message : error?.message, 400)
            );
        }

        let images = [];
        let image = req.files["images"];
        if (image || image?.length > 0) {
            for (let i = 0; i < image?.length; i++) {
                const img = "/" + image[i]?.path?.replace(/\\/g, "/");
                images.push({
                    isApproved: false,
                    image: img,
                });
            }
        }

        const event = new Event({ ...req.body, images: images, user: req.user._id });

        await event.save();

        res.status(201).json({
            status: "success",
            data: event,
        });
    }),
};
