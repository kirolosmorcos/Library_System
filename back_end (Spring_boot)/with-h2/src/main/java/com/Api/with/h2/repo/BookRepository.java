package com.Api.with.h2.repo;

import com.Api.with.h2.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> //Long type of Primary Keys ->id
{
    @Query("SELECT b FROM Book b WHERE b.name LIKE %:name%")
    List<Book> searchByNameLike(@Param("name") String name);

}
