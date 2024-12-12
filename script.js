/* General Styles */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #f3f9ff, #dbeafe);
  color: #333;
}

/* Header Navigation */
header {
  background: #2c3e50;
  padding: 1rem 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 1.5rem;
}

nav a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  transition: color 0.3s, transform 0.3s;
}

nav a i {
  margin-right: 0.5rem;
}

nav a:hover, nav a.active {
  color: #1abc9c;
  transform: scale(1.1);
}

/* Contact Form Section */
.contact-form {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  margin: 3rem auto;
  width: 90%;
  max-width: 600px;
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
}

.contact-form h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.contact-form .highlight {
  color: #1abc9c;
}

.contact-form .intro-text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

/* Form Styles */
.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.form-group label i {
  margin-right: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #1abc9c;
}

textarea {
  height: 150px;
  resize: none;
}

/* Button Styles */
.cta-button {
  background: #1abc9c;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: background 0.3s, transform 0.3s;
}

.cta-button i {
  margin-right: 0.5rem;
}

.cta-button:hover {
  background: #16a085;
  transform: scale(1.05);
}

/* Footer */
footer {
  background: #2c3e50;
  color: #ecf0f1;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin: 0.5rem 0;
  }

  .