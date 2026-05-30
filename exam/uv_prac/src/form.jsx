import React, { useState } from 'react';

export default function UserInfoForm() {
  // 1. Initialize state for all the input fields
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    languages: [] // Array to handle multiple checkboxes
  });

  // State to hold the data only after the user clicks submit
  const [submittedData, setSubmittedData] = useState(null);

  // General handler for all text, number, and select inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Specific handler for the checkboxes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // Add language to array if checked
      setFormData({ ...formData, languages: [...formData.languages, value] });
    } else {
      // Remove language from array if unchecked
      setFormData({ 
        ...formData, 
        languages: formData.languages.filter((lang) => lang !== value) 
      });
    }
  };

  // 2. Handle the form submit event
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from reloading
    setSubmittedData(formData); // Save the current form data to be displayed
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>User Information Form</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Name: Text Input */}
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />
        </div>

        {/* Age: Number Input */}
        <div style={{ marginBottom: '10px' }}>
          <label>Age: </label>
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleInputChange} 
            required 
          />
        </div>

        {/* Gender: Select Box */}
        <div style={{ marginBottom: '10px' }}>
          <label>Gender: </label>
          <select name="gender" value={formData.gender} onChange={handleInputChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Language: Checkbox */}
        <div style={{ marginBottom: '10px' }}>
          <label>Languages Known: </label><br />
          <label>
            <input type="checkbox" value="English" onChange={handleCheckboxChange} /> English
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" value="Spanish" onChange={handleCheckboxChange} /> Spanish
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" value="French" onChange={handleCheckboxChange} /> French
          </label>
        </div>

        <button type="submit">Submit Form</button>
      </form>

      <hr />

      {/* 3. Display the entered data on the screen conditionally */}
      {submittedData && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid green' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Languages:</strong> {submittedData.languages.join(', ') || 'None selected'}</p>
        </div>
      )}
    </div>
  );
}