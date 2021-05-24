const express = require('express')
const router = express.Router();
const uuidv4 = require('uuid').v4

let games = [
    {
    id: "adowb1b3bb",
    game: "League of Legends",
    description: "League of Legends is a team-based game with over 140 champions to make epic plays with."
    },
    {
    id: "kd7b9ks2nda",
    game: "PlayerUnknown's Battlegrounds",
    description: "PLAYERUNKNOWN'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback."
    }
]

router.get('/get-all-games', function (req, res){
    res.json({payload: games})
})

router.get('/get-game-by-id/:id', function (req, res){
    // res.json({payload: "check"})
    const id = req.params.id

    let foundId;

    games.forEach((item)=>{
        if (item.id === id){
            foundId = item
        }
    })

    if(!foundId){
        res.json({message: "The game with the id does not exist, please check id"})
    } else {
        res.json({payload: foundId})
    }
})

router.post('/create-new-game', function (req, res){
    let foundGame;

    let newGame = {
        id: uuidv4(),
        game: req.body.game,
        description: req.body.description
    }

    games.forEach((item)=>{
        if (newGame.game === item.game){
            foundGame = true;
        } else if (newGame.game === "") {
            res.json({message: "Cannot leave text area blank"})
        } else {
            if (newGame.description === ""){
                res.json({message: "Cannot leave text area blank"})
            }
        }
    })

    if(foundGame){
        res.json({message: "Game already exists, cannot add game"})
    } else {
        games.push(newGame),
        res.json({games})
    }
})


module.exports = router