// src/service.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

// Insert a new student
export const addStudent = async (studentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/add`, studentData);
    return response.data; // Returns { message: "Student Insert Successfully" }
  } catch (error) {
    console.error('Error inserting student:', error);
    throw error;
  }
};

// Fetch all students
export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getstudents`);
    return response.data; // Returns an array of student objects
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Update a student
export const updateStudent = async (id, studentData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/updatestudent/${id}`, studentData);
    return response.data; // Returns { message: "Student Updated Successfully" }
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

// Delete a student
export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/deletestudent/${id}`);
    return response.data; // Returns { message: "Student Deleted Successfully" }
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};