const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Archive = require('../models/Archive');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallarchive', async (req, res) => {
    try {
        const archive = await Archive.find();
        res.json(archive)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addarchive', fetchuser, async (req, res) => {
        try {
            

            
            
            const savedarchive = await Archive.create({
                title:req.body.title,
                description:req.body.description,
                tag:req.body.tag,
                posterlink:req.body.posterlink,
                day:req.body.day,
                month:req.body.month,
                eventtime:req.body.eventtime,
                coordinator:req.body.coordinator
            })

            res.json(savedarchive)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletearchive/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let archives = await Archive.findById(req.params.id);
        if (!archives) { return res.status(404).send("Not Found") }

        
        

        archives = await Archive.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", archive: archives });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;