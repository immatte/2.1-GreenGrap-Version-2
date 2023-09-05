var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// GET veggies list
router.get("/", function(req, res, next) {
  db("SELECT * FROM veggies;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


// GET Month veggies list
router.get("/:month", function(req, res, next) {
  let month = req.params.month;
  db(`SELECT month_veggies.*, veggies.* FROM month_veggies 
  LEFT JOIN veggies ON month_veggies.veggies_fk = veggies.id
  Where month_veggies.month_fk = ${month}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
    
});

// GET Month veggies list by country
router.get("/:country/:month", function(req, res, next) {
  let month = req.params.month;
  let country = req.params.country;
  db(`SELECT month_veggies.*, veggies.* FROM month_veggies 
  LEFT JOIN veggies ON month_veggies.veggies_fk = veggies.id
  Where month_veggies.month_fk = ${month}
  AND month_veggies.country_fk = ${country}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
    
});

// GET all veggies from country
router.get("/countryveggies/:country", function(req, res, next) {
  let country = req.params.country;
  db(`SELECT month_veggies.*, veggies.* FROM month_veggies 
  LEFT JOIN veggies ON month_veggies.veggies_fk = veggies.id
  AND month_veggies.country_fk = ${country};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
    
});


// GET veggies by id
router.get("/veggie/:id", function(req, res, next) {
  let VeggiesId = req.params.id;
  db(`SELECT * FROM veggies where id=${VeggiesId};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//POST a new veggie
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

//Modify the veggie
router.put("/veggie/:id", async (req, res, next) => {
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

//Delete one veggie
router.delete("/veggie/:id", async (req, res, next) => {
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
