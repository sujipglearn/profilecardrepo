const express = require('express');
const app = express();
const port = 3000;

app.get('/profilecard', (req, res) => {
  // Handle the request and return custom profile data
  const profileData = {
    displayName: 'Suji Jatheesh',
    title: 'Software Engineer',
    department: 'IT',
    email: 'suji.jatheesh@leuwint.com',
  };
  res.json(profileData);
});

app.listen(port, () => {
  console.log(`Profile card service listening at http://localhost:${port}`);
});