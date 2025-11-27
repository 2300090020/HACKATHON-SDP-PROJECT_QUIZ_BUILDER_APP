package com.klef.fsd.sdp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.klef.fsd.sdp.model.Player;
import com.klef.fsd.sdp.repository.PlayerRepository;

@Service
public class PlayerServiceImpl implements PlayerService 
{
    @Autowired
    private PlayerRepository playerRepository;
    
    @Override
    public String playerRegistration(Player player) 
    {
        playerRepository.save(player);
        return "Player Registered Successfully";
    }

    @Override
    public Player checkPlayerLogin(String username, String password) 
    {
        // Sanitize the input by trimming whitespace
        String sanitizedUsername = username.trim();
        String sanitizedPassword = password.trim();
        
        return playerRepository.findByUsernameAndPassword(sanitizedUsername, sanitizedPassword);
    }
}
