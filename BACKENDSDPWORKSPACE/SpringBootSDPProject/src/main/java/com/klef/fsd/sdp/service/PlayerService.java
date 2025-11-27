package com.klef.fsd.sdp.service;

import com.klef.fsd.sdp.model.Player;

public interface PlayerService 
{
    public String playerRegistration(Player player);
    public Player checkPlayerLogin(String username, String password);
}
