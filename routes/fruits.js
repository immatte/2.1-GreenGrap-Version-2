var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// GET fruits list
router.get("/", function(req, res, next) {
  db("SELECT * FROM fruits;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


// GET Month fruits list by country
router.get("/:country/:month", function(req, res, next) {
  let month = req.params.month;
  let country = req.params.country;
  db(`SELECT month_fruits.*, fruits.* FROM month_fruits 
  LEFT JOIN fruits ON month_fruits.fruits_fk = fruits.id
  Where month_fruits.month_fk = ${month}
  AND month_fruits.country_fk = ${country}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
    
});
// GET Month fruits list
router.get("/:month", function(req, res, next) {
  let month = req.params.month;
  db(`SELECT month_fruits.*, fruits.* FROM month_fruits 
  LEFT JOIN fruits ON month_fruits.fruits_fk = fruits.id
  Where month_fruits.month_fk = ${month}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
    
});

// GET fruits by id
router.get("/fruit/:id", function(req, res, next) {
  let VeggiesId = req.params.id;
  db(`SELECT * FROM veggies where id=${VeggiesId};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//POST a new fruit
router.post("/", async (req, res, next) => {
  // The request's body is available in req.body
  let { veggie_name, veggie_type } = req.body;
  // If the query is successfull you should send back the full list of veggies
  let sql = `
      INSERT INTO veggies (veggie_name, veggie_type)
      VALUES ('${veggie_name}', '${veggie_type}')
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

//Modify a fruit
router.put("fruit/:id", async (req, res, next) => {
  let VeggiesId = req.params.id;
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of veggies
  try {
    let result = await db(`SELECT * FROM veggies WHERE id = ${VeggiesId}`);
    if (result.data.length === 0) {
      //did not find the veggies
      res.status(404).send({ error: "GreenGrab veggies not found" });
    } else {
      // found it
      let { veggie_name, veggie_type } = req.body;
      let sql = `
          UPDATE veggies set text = '${veggie_name}', complete = ${veggie_type} WHERE id = ${VeggiesId}
      `;
      
      //doing the UPDATE
      await db(sql);
      //SELECT all veggies to return
      result = await db("SELECT * FROM veggies");
      let veggies = result.data;
      res.send(veggies);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  // Add your code here
  //
});

//Delete a fruit
router.delete("/fruit/:id", async (req, res, next) => {
  let VeggiesId = req.params.id;
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of veggies
  try {
    let result = await db(`SELECT * FROM veggies WHERE id = ${VeggiesId}`);
    if (result.data.length === 0) {
      //did not find the veggies
      res.status(404).send({ error: "GreenGrab veggies not found" });
    } else {
      // found it
      let sql = `
          DELETE from veggies WHERE id = ${VeggiesId}}
      `;
      //doing the UPDATE
      await db(sql);
      //SELECT all veggies to return
      result = await db("SELECT * FROM veggies");
      let veggies = result.data;
      res.send(veggies);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  // Add your code here
  //
});

module.exports = router;
