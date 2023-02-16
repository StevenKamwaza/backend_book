const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM vacancy`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}
async function postItem(id, myVacancy) {
  const result = await db.query(`SELECT * FROM vacancy  WHERE id=${id}`);
  const data = result;
  return data;
}
async function create(myVacancy) {
  const result = await db.query(
    `INSERT INTO vacancy 
    (position, post_date) 
    VALUES (?,?)`,[myVacancy.position, myVacancy.post_date]);

  let message = "Error in creating a vacancy";

  if (result.affectedRows) {
    message = "A post was created successfully";
  }

  return { message };
}
async function update(id, myVacancy) {
  const result = await db.query(
    `UPDATE vacancy SET position="${myVacancy.position}",
     duties=${myVacancy.duties}, 
     post_date=${myVacancy.post_date}
    WHERE id=${id}`
  );

  let message = "Error in updating post";

  if (result.affectedRows) {
    message = "vacancy updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE vacancy WHERE id=${id}`);

  let message = "Error in deleting vacancy";

  if (result.affectedRows) {
    message = "Ooh, wow, you have just deleted this vacancy";
  }

  return { message };
}

module.exports = {
  getMultiple,
  postItem,
  create,
  update,
  remove,
};
