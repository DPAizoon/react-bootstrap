import React from 'react';

export default function Dashboard() {

  function andleLogOut(e) {
    e.preventDefault();    
    localStorage.removeItem('token');
    window.location.href='/'
  }
  
  return(
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={andleLogOut}>
        <button type="submit">LogOut</button>
      </form>
    </div>
  );
}