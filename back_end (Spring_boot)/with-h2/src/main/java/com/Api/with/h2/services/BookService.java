package com.Api.with.h2.services;


import com.Api.with.h2.exceptions.DuplicationNameException;
import com.Api.with.h2.models.Book;
import com.Api.with.h2.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getBooks() {

        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Long id) {

        return bookRepository.findById(id);
    }



    public boolean removeBook(Long id)
    {
         Optional<Book> op=bookRepository.findById(id);
         if(op.isPresent())
         {
             bookRepository.deleteById(id);
             return true;
         }
         else
             return false;
    }
    public Book updateBook(Long id,Book details)
    {
        Optional<Book> op=getBookById(id);
        if(op.isPresent())
        {
            op.get().setName(details.getName());
            bookRepository.save(op.get());
            return op.get();
        }
        return null;
    }



    public Book addBook(Book book)
    {
        if(!bookRepository.searchByNameLike(book.getName()).isEmpty())
                throw new DuplicationNameException(book.getName());


        else
        return bookRepository.save(book);
    }


}
