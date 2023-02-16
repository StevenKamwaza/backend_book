const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM galley`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}
async function postItem(id, myImage) {
  const result = await db.query(`SELECT * FROM galley  WHERE id=${id}`);
  const data = result;
  return data;
}

async function create(myImage,img) {
  const result = await db.query(
    `INSERT INTO galley 
    (imageURL, location, date) 
    VALUES (?,?,?)`, [img.imageURL, myImage.location,myImage.date]);

  let message = "Error in creating a gallery";

  if (result.affectedRows) {
    message = "An image was created successfully";
  }

  return { message };
}
async function update(id, myImage) {
  const result = await db.query(
    `UPDATE galley
    SET imageURL="${myImage.imageURL}",
     location=${myImage.location}, 
     imageURL=${myImage.imageURL}, 
    date=${myImage.date}
    WHERE id=${id}`
  );

  let message = "Error in updating a galley";

  if (result.affectedRows) {
    message = "gallery  updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM galley WHERE id=${id}`);

  let message = "Error in deleting post";

  if (result.affectedRows) {
    message = "Ooh, wow, you have just deleted this";
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
