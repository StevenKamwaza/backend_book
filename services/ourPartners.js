const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM partners`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}
async function postItem(id, myPartner) {
  const result = await db.query(`SELECT * FROM partners  WHERE id=${id}`);
  const data = result;
  return data;
}
async function create(myPartner) {
  const result = await db.query(
    `INSERT INTO partners 
    (name) 
    VALUES 
    (?)`,
    [myPartner.name]
  );

  let message = "Error in creating a partners";

  if (result.affectedRows) {
    message = "A post was created successfully";
  }

  return { message };
}
async function update(id, myPartner) {
  const result = await db.query(
    `UPDATE partners SET name=${myPartner.name} WHERE id=${id}`
  );

  let message = "Error in updating post";

  if (result.affectedRows) {
    message = "partners updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM partners WHERE id=${id}`);

  let message = "Error in deleting partner";

  if (result.affectedRows) {
    message = "Ooh, wow, you have just deleted this partners";
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
