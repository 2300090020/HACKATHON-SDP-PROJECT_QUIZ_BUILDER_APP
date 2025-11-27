package com.klef.fsd.sdp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.fsd.sdp.model.Player;
import com.klef.fsd.sdp.service.PlayerService;

@RestController
@RequestMapping("/player")
@CrossOrigin("*") // * means any URL
public class PlayerController 
{
    @Autowired
    private PlayerService playerService;
    
    @GetMapping("/")
    public String home()
    {
        return "FSD SDP Project";
    }
    
    @PostMapping("/registration")
    public ResponseEntity<String> playerRegistration(@RequestBody Player player)
    {
        try
        {
            String output = playerService.playerRegistration(player);
            return ResponseEntity.ok(output); // 200 - success
        }
        catch(Exception e)
        {
            return ResponseEntity.status(500).body("Player Registration failed");
        }
    }
    
    @PostMapping("/checkplayerlogin")
    public ResponseEntity<?> checkPlayerLogin(@RequestBody Player player) 
    {
        try 
        {
            Player p = playerService.checkPlayerLogin(player.getUsername(), player.getPassword());

            if (p != null) 
            {
                return ResponseEntity.ok(p); // if login is successful
            } 
            else 
            {
                return ResponseEntity.status(401).body("Invalid Username or Password"); // if login fails
            }
        } 
        catch (Exception e) 
        {
            return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
        }
    }
}
