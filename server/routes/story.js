const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const Story = require("../models/Story");

// @desc create new story
// @route POST /api/story/create
router.post("/create", ensureAuth, async (req, res) => {
  try {
    const storyData = {
      user: req.user.id,
      ...req.body,
    };

    const story = await Story.create(storyData).lean();

    return res.status(201).json({
      story,
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
});

// @desc get all user stories
// @route GET /api/story
router.get("/", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).lean();

    return res.status(201).json({
      stories,
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
});

// @desc get story by id
// @route GET /api/story/:id
router.get("/:id", ensureAuth, async (req, res) => {
  try {
    const story = await Story.findOne({
      id: req.params.id,
    }).lean();

    return res.status(201).json({
      story,
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
});

// @desc update story
// @route POST /api/story/:id
router.post("/:id", ensureAuth, async (req, res) => {
  try {
    const storyData = {
      user: req.user.id,
      ...req.body,
    };

    const story = await Story.updateOne(
      { user: req.user.id, id: req.params.id },
      storyData
    ).lean();

    return res.status(201).json({
      story,
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
});

// @desc delete story
// @route delete /api/story/:id
router.post("/:id", ensureAuth, async (req, res) => {
  try {
    const story = await Story.deleteOne({
      user: req.user.id,
      id: req.params.id,
    }).lean();

    return res.status(201).json({
      story,
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
});

module.exports = router;
