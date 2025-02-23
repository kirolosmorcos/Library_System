package com.Api.with.h2.repo;

import com.Api.with.h2.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
//    Role findByName(String name);
}
