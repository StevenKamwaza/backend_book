const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM testimonials`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}
async function testmonialItem(id, myTestimonial) {
  const result = await db.query(`SELECT * FROM testimonials  WHERE id=${id}`);
  const data = result;
  return data;
}
async function create(myTestimonial) {
  const result = await db.query(
    `INSERT INTO testimonials 
    (name, text, position, imageURL) 
    VALUES (?,?,?,?)`,
    [myTestimonial.name,myTestimonial.text,myTestimonial.imageURL,myTestimonial.position]);

  let message = "Error in creating a testmonial";

  if (result.affectedRows) {
    message = "A testmonial was created successfully";
  }

  return { message };
}
async function update(id, myTestimonial) {
  const result = await db.query(
    `UPDATE testimonials SET name="${myTestimonial.name}",
     text=${myTestimonial.text}, 
     imageURL=${myTestimonial.imageURL}, 
     position=${myTestimonial.position}
    WHERE id=${id}`
  );

  let message = "Error in updating testmony";

  if (result.affectedRows) {
    message = "testmonial updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM testimonials WHERE id=${id}`);

  let message = "Error in deleting testmonial";

  if (result.affectedRows) {
    message = "Ooh, wow, you have just deleted this";
  }

  return { message };
}

module.exports = {
  getMultiple,
  testmonialItem,
  create,
  update,
  remove,
};
