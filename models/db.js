// models/db.js
const mysql = require('mysql2');

// Create a pool connection to the database for better performance and handling of concurrent queries
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your MySQL password
  database: 'baanbm', // Replace with your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

// Function to fetch all subject types
async function getAllSubjectTypes() {
  try {
    const query = 'SELECT * FROM subject_types';
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    console.error('Error fetching subject types:', error);
    throw error;
  }
}

// Function to delete multiple subject types by their IDs
async function deleteSubjectTypesByIds(ids) {
  try {
    const query = 'DELETE FROM subject_types WHERE id IN (?)';
    await pool.query(query, [ids]);
    console.log(`Deleted subject types with IDs: ${ids}`);
  } catch (error) {
    console.error('Error deleting subject types:', error);
    throw error;
  }
}

// Function to insert a new subject type
async function insertSubjectType(name) {
  try {
    const query = 'INSERT INTO subject_types (name) VALUES (?)';
    await pool.query(query, [name]);
  } catch (error) {
    console.error('Error inserting subject type:', error);
    throw error;
  }
}

// Function to update a subject type
async function updateSubjectType(id, name) {
  try {
    const query = 'UPDATE subject_types SET name = ? WHERE id = ?';
    await pool.query(query, [name, id]);
  } catch (error) {
    console.error('Error updating subject type:', error);
    throw error;
  }
}

// Functions for subjects table
async function getAllSubjects() {
  try {
    const query = 'SELECT * FROM subjects';
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    console.error('Error fetching subjects:', error);
    throw error;
  }
}

async function insertSubject(name, description, imgUrl, typeId) {
  try {
    const query = 'INSERT INTO subjects (name, description, img_url, type_id) VALUES (?, ?, ?, ?)';
    await pool.query(query, [name, description, imgUrl, typeId]);
  } catch (error) {
    console.error('Error inserting subject:', error);
    throw error;
  }
}

async function deleteSubjectsByIds(ids) {
  try {
    const query = 'DELETE FROM subjects WHERE id IN (?)';
    await pool.query(query, [ids]);
    console.log(`Deleted subjects with IDs: ${ids}`);
  } catch (error) {
    console.error('Error deleting subjects:', error);
    throw error;
  }
}

async function updateSubject(id, name, description, imgUrl, typeId) {
  try {
    const query = 'UPDATE subjects SET name = ?, description = ?, img_url = ?, type_id = ? WHERE id = ?';
    await pool.query(query, [name, description, imgUrl, typeId, id]);
    console.log(`Subject with ID ${id} updated successfully.`);
  } catch (error) {
    console.error('Error updating subject:', error);
    throw error;
  }
}

module.exports = { 
  getAllSubjectTypes, 
  deleteSubjectTypesByIds,
  insertSubjectType,
  updateSubjectType,
  getAllSubjects,
  insertSubject,
  deleteSubjectsByIds,
  updateSubject
};