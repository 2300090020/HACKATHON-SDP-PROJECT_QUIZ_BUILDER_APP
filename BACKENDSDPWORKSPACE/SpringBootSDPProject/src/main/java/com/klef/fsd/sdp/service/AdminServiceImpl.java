package com.klef.fsd.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Player;
import com.klef.fsd.sdp.repository.AdminRepository;
import com.klef.fsd.sdp.repository.PlayerRepository;

@Service
public class AdminServiceImpl implements AdminService
{
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @Override
    public Admin checkadminlogin(String username, String password) 
    {
        return adminRepository.findByUsernameAndPassword(username, password);
    }

    @Override
    public List<Player> displayplayers() 
    {
        return playerRepository.findAll();
    }

    @Override
    public String deleteplayer(int pid) 
    {
        Optional<Player> player = playerRepository.findById(pid);

        if (player.isPresent()) 
        {    
            playerRepository.deleteById(pid);
            return "Player Deleted Successfully";
        } 
        else 
        {
            return "Player ID Not Found";
        }
    }
}
