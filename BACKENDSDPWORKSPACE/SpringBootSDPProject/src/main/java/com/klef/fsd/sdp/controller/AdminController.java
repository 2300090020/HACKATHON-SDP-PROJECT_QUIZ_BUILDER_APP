package com.klef.fsd.sdp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Player;
import com.klef.fsd.sdp.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController 
{
    @Autowired
    private AdminService adminService;
    
    @PostMapping("/checkadminlogin")
    public ResponseEntity<?> checkAdminLogin(@RequestBody Admin admin)
    {
        try 
        {
            Admin a = adminService.checkadminlogin(admin.getUsername(), admin.getPassword());

            if (a != null) 
            {
                return ResponseEntity.ok(a); // Login successful
            } 
            else 
            {
                return ResponseEntity.status(401).body("Invalid Username or Password"); // Login failed
            }
        } 
        catch (Exception e) 
        {
            e.printStackTrace(); // better than System.out.println
            return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
        }
    }
    
    @GetMapping("/viewallplayers")
    public ResponseEntity<List<Player>> viewAllPlayers()
    {
        List<Player> players = adminService.displayplayers();
        return ResponseEntity.ok(players);
    }
    
    @DeleteMapping("/deleteplayer")
    public ResponseEntity<String> deletePlayer(@RequestParam int pid)
    {
        try
        {
            String output = adminService.deleteplayer(pid);
            return ResponseEntity.ok(output);
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to delete player: " + e.getMessage()); 
        }
    }
}
