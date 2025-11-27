import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ViewPlayers() 
{
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState("");

    const displayPlayers = async () => 
    {
        try 
        {
            const response = await axios.get(`${config.url}/admin/viewallplayers`);
            setPlayers(response.data);
        } 
        catch (err) 
        {
            setError("Failed to fetch players data ... " + err.message);
        }
    };

    useEffect(() => {
        displayPlayers();
    }, []);

    const deletePlayer = async (pid) => 
    {
        try 
        {
            const response = await axios.delete(`${config.url}/admin/deleteplayer?pid=${pid}`);
            alert(response.data);
            displayPlayers();
        } 
        catch (err) 
        {
            console.log(err);
            setError("Unexpected Error Occurred... " + err.message);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h3 style={{ textAlign: "center", color: "black", fontWeight: "bolder" }}>
                <u>View All Players</u>
            </h3>

            {error ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    {error}
                </p>
            ) : players.length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    No Player Data Found
                </p>
            ) : (
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Mobile No</th>
                            <th>Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>{player.name}</td>
                                <td>{player.gender}</td>
                                <td>{player.dob}</td>
                                <td>{player.email}</td>
                                <td>{player.username}</td>
                                <td>{player.mobileno}</td>
                                <td>{player.location}</td>
                                <td>
                                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deletePlayer(player.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
