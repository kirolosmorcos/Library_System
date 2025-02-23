package com.Api.with.h2.controllers;

import com.Api.with.h2.services.BookService;
import com.Api.with.h2.models.Book;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/library")

public class BookController {

    @Autowired
    private BookService myBooksList;
    @GetMapping("/books")
    public List<Book> getAllBooks()
    {
        return myBooksList.getBooks();
    }

    @PostMapping("/admin")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Book> createBook(@RequestBody @Valid Book book)
    {

         Book createdBook=myBooksList.addBook(book);


        return new ResponseEntity<>(createdBook, HttpStatus.CREATED);
    }

    @PutMapping("/admin/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody  @Valid Book details)
    {
        Book update=myBooksList.updateBook(id,details);
        if(update!=null)
        return new ResponseEntity<>(update, HttpStatus.CREATED);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/admin/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id)
    {
       Boolean re=myBooksList.removeBook(id);
       if(re)
       {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       }
       return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
