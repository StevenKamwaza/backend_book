const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM careers`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}
async function careerItem(id, mycareer) {
  const result = await db.query(`SELECT * FROM careers  WHERE id=${id}`);
  const data = result;
  return data;
}
async function create(mycareer) {
  const result = await db.query(
    `INSERT INTO careers 
    
    (name, position, imageURL) 
    VALUES (?,?,?)`, [mycareer.name, mycareer.position, mycareer.imageURL]);

  let message = "Error in creating a career";

  if (result.affectedRows) {
    message = "A career was created successfully";
  }

  return { message };
}

async function update(id, mycareer) {
  const result = await db.query(
    `UPDATE careers SET name="${mycareer.name}",
     position=${mycareer.position}, 
     imageURL=${mycareer.imageURL}, 
    WHERE id=${id}`
  );

  let message = "Error in updating career";
  if (result.affectedRows) {
    message = "career updated successfully";
  }
  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM careers WHERE id=${id}`);
  let message = "Error in deleting career";
  if (result.affectedRows) {
    message = "Ooh, wow, you have just fired this guy";
  }
  return { message };
}

module.exports = {
  getMultiple,
  careerItem,
  create,
  update,
  remove,
};
