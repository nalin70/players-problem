import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={[
      { id: 101, name: "sachin", city: "Mumbai", talent: ["Batting", "Bowling"] },
      { id: 102, name: "saurav", city: "Kolkata", talent: ["Batting", "Captain"] },
      { id: 103, name: "anil", city: "Bangalore", talent: ["Batting", "Bowling", "Captain"] },
      { id: 104, name: "krish", city: "Chennai", talent: ["Batting", "Captain"] },
      { id: 105, name: "mahi", city: "Ranchi", talent: ["Batting", "Bowling", "Captain", "Keeping"] }
    ]} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
