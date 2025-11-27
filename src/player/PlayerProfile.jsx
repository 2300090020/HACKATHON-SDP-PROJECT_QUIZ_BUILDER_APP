import { useState, useEffect } from 'react';

export default function PlayerProfile() 
{
  const [player, setPlayer] = useState("");
     
  useEffect(() => {
    const storedPlayer = sessionStorage.getItem('player');
    if (storedPlayer) {
      setPlayer(JSON.parse(storedPlayer));
    }
  }, []);

  if (!player) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading profile...
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '20px' }}>
        Player Profile
      </h2>

      <div
        style={{
          backgroundColor: 'lightgrey',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '20px',
          width: '350px',
        }}
      >
        <p><strong>Name:</strong> {player.name}</p>
        <p><strong>Gender:</strong> {player.gender}</p>
        <p><strong>Date of Birth:</strong> {player.dob}</p>
        <p><strong>Email:</strong> {player.email}</p>
        <p><strong>Username:</strong> {player.username}</p>
        <p><strong>Mobile No:</strong> {player.mobileno}</p>
        <p><strong>Location:</strong> {player.location}</p>
      </div>
    </div>
  );
}
