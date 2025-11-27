package com.klef.fsd.sdp.service;

import java.util.List;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Player;

public interface AdminService 
{
    public Admin checkadminlogin(String username, String password);
    
    public List<Player> displayplayers();
    public String deleteplayer(int pid);
}
