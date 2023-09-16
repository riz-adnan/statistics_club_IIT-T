const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Event = require('../models/Event');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallevents', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addevent', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const savedevent = await Event.create({
                title:req.body.title,
                description:req.body.description,
                tag:req.body.tag,
                posterlink:req.body.posterlink,
                day:req.body.day,
                month:req.body.month,
                eventtime:req.body.eventtime,
                coordinator:req.body.coordinator
            })

            res.json(savedevent)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updateevent/:id', fetchuser, async (req, res) => {
    const { title, description, tag,posterlink,day,month,eventtime,coordinator } = req.body;
    try {
        // Create a newNote object
        const newEvent = {};
        if (title) { newEvent.title = title };
        if (description) { newEvent.description = description };
        if (tag) { newEvent.tag = tag };
        if(posterlink){newEvent.posterlink=posterlink};
        if(day){newEvent.day=day};
        if(month){newEvent.month=month};
        if(eventtime){newEvent.eventtime=eventtime};
        if(coordinator){newEvent.coordinator=coordinator};

        // Find the note to be updated and update it
        let event = await Event.findById(req.params.id);
        if (!event) { return res.status(404).send("Not Found") }

        
        event = await Blog.findByIdAndUpdate(req.params.id, { $set: newBlog }, { new: true })
        res.json({ event });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deleteevent/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let event = await Event.findById(req.params.id);
        if (!event) { return res.status(404).send("Not Found") }

        
        

        event = await Event.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", event: event });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;