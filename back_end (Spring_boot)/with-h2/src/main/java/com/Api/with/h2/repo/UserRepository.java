package com.Api.with.h2.repo;


 import com.Api.with.h2.models.User;
 import org.springframework.data.jpa.repository.JpaRepository;
 import org.springframework.data.jpa.repository.Query;
 import org.springframework.data.repository.query.Param;
 import org.springframework.stereotype.Repository;

 import java.util.List;
 import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
   Optional<User> findByUsername(String username);
    @Query("SELECT u FROM User u WHERE u.username LIKE %:username%")
    List<User> findByUsernameLike(@Param("username") String username);
}

