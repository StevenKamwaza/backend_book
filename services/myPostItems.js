const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM posts`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}
async function postItem(id, myPost) {
  const result = await db.query(`SELECT * FROM posts  WHERE id=${id}`);
  const data = result;
  return data;
}
async function create(myPost) {
  const result = await db.query(
    `INSERT INTO posts 
    (title, text, imageURL) VALUES (?,?,?)`,[myPost.title, myPost.text, myPost.imageURL]);

  let message = "Error in creating a post";

  if (result.affectedRows) {
    message = "A post was created successfully";
  }

  return { message };
}
async function update(id, myPost) {
  const result = await db.query(
    `UPDATE posts SET title="${myPost.title}",
     text=${myPost.text}, 
     imageURL=${myPost.imageURL}, 
     date=${myPost.date}
    WHERE id=${id}`
  );

  let message = "Error in updating post";

  if (result.affectedRows) {
    message = "post updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM posts WHERE id=${id}`);

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
