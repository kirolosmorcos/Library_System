package com.Api.with.h2.services;

import com.Api.with.h2.exceptions.DuplicationNameException;
import com.Api.with.h2.models.User;
import com.Api.with.h2.repo.RoleRepository;
import com.Api.with.h2.repo.UserRepository;

import com.Api.with.h2.util.UserInfoDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    public static final String USER = "USER";
    public static final String ROLE_USER = "ROLE_" + USER;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private com.Api.with.h2.repo.UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userDetail = userRepository.findByUsername(username);
        return userDetail.map(UserInfoDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }



    @Override
    public String saveUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        if (!userRepository.findByUsernameLike(user.getUsername()).isEmpty())
            throw new DuplicationNameException(user.getUsername());
        else {
            userRepository.save(user);
            roleRepository.saveAll(user.getRoles());
            return "User Added Successfully";

        }
    }
}
