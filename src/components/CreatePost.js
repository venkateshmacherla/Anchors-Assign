import React, { useState } from 'react';
import '../styles/createpost.css';
import { Outlet } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePostSubmit = async () => {
    try {
      const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/satya123-diawr/endpoint/postdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response.ok) {
        console.log('Post submitted successfully');
        window.alert('Post submitted successfully');
      } else {
        console.error('Failed to submit post');
        window.alert('Failed to submit post');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('Error while submitting post');
    }
  };

  return (
    <div className="create-user-container">
      <h1 className="welcome-text">Create post</h1>
      <div className="input-container">
        <input
          type="text"
          id="title"
          className="input-field"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          id="description"
          className="input-field"
          placeholder="Describe your post..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="createbtn" onClick={handlePostSubmit}>
        Post Submit
      </button>
      <Outlet />
    </div>
  );
};

export default CreatePost;