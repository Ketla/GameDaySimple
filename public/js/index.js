document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Here you would add the fetch call to the AWS Lambda function
  console.log('Username:', username, 'Password:', password);
  
  // Placeholder for the fetch call
});
