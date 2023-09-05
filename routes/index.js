var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
})


// GET calendar list
// router.get("/calendar", function(req, res, next) {
//   db("SELECT * FROM calendar;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });


// GET month by id
// router.get("/month/:month", function(req, res, next) {
//   let calendarId = req.params.month;
//   db(`SELECT * FROM calendar where id=${calendarId};`)
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// `SELECT * FROM calendar where id=${month};`

router.post("/calendar", async (req, res, next) => {
  // The request's body is available in req.body
  let { id, month_Name, month_vege, month_fruit} = req.body;
  // If the query is successfull you should send back the full list of veggies
  let sql = `
      INSERT INTO calendar (id, month_Name, month_vege, month_fruit)
      VALUES (${id},'${month_Name}', '${month_vege}','${month_fruit}')
  `;
  try {
    //do the INSERT
    await db(sql);
    //SELECT all GreenGrab to return
    let result = await db("SELECT * FROM veggies");
    let greengrab = result.data;
    res.status(201).send(greengrab);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//Modify the month
router.put("/month/:id", async (req, res, next) => {
  let CalendarId = req.params.id;
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of veggies
  try {
    let result = await db(`SELECT * FROM calendar WHERE id = ${CalendarId}`);
    if (result.data.length === 0) {
      //did not find the veggies
      res.status(404).send({ error: "GreenGrab calendar not found" });
    } else {
      // found it
      let { month_vege, month_fruit }= req.body;
      let sql = `
          UPDATE veggies set month_vege = '${month_vege}', month_fruit = '${month_fruit}' WHERE id = ${CalendarId}
      `;
      
      //doing the UPDATE
      await db(sql);
      //SELECT all veggies to return
      result = await db("SELECT * FROM calendar");
      let veggies = result.data;
      res.send(veggies);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  // Add your code here
  //
});

//search by country
router.get('/search', function(req, res, next) {
  const {search= ""} = req.query
  db(`SELECT * FROM countries WHERE country_name LIKE '%${search}%'`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//get all countries
router.get("/countries", function(req, res, next) {
    db("SELECT * FROM countries;")
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
  });

module.exports = router;