package com.klef.fsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.klef.fsd.sdp.model.Player;
import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer>
{
    @Query("SELECT p FROM Player p WHERE p.username = ?1 AND p.password = ?2")
    public Player findByUsernameAndPassword(String username, String password);
    
    @Query("SELECT p FROM Player p WHERE p.gender = ?1")
    public List<Player> displayPlayersByGender(String gender);
    
    @Modifying
    @Transactional
    @Query("DELETE FROM Player p WHERE p.location = ?1")
    public Long deletePlayerByLocation(String location);
}
