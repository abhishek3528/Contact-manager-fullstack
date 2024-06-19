package com.project.contact_manager.controller;

import com.project.contact_manager.dto.ContactDTO;
import com.project.contact_manager.service.ContactService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/contacts")
public class ContactController {

    private ContactService contactService;

    //Building Add Contact REST API
    @PostMapping
    public ResponseEntity<ContactDTO> createContact(@RequestBody ContactDTO contactDTO)
    {
        ContactDTO savedContact= contactService.createContact(contactDTO);
        return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
    }
    //Building Get Contact REST API
    @GetMapping("{id}")
    public ResponseEntity<ContactDTO> getContactbyphone(@PathVariable("id") Long phone)
    {
        ContactDTO contactDTO=contactService.getContactByPhone(phone);
        return ResponseEntity.ok(contactDTO);//shortcut Method

        //return new ResponseEntity<>(contactDTO,HttpStatus.OK); // Verbose Constructor
    }

    //Building Get All Contacts REST API
    @GetMapping
    public ResponseEntity<List<ContactDTO>> getAllContacts(){
        List<ContactDTO> contactDTOS=contactService.getAllContacts();
        return ResponseEntity.ok(contactDTOS);
    }

    //Building Update Contact REST API
    @PutMapping("/{id}")
    public ResponseEntity<ContactDTO> updateContact(@PathVariable("id") Long phone, @RequestBody ContactDTO updatedContact)
    {
        ContactDTO contactDTO=contactService.updateContact(phone,updatedContact);
        return ResponseEntity.ok(contactDTO);//shortcut Method
    }

    //Building Delete Contact REST API
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContact(@PathVariable("id") Long phone)
    {
        contactService.deleteContact(phone);
        return ResponseEntity.ok("Contact Deleted Successfully");//shortcut Method
        //return new ResponseEntity<>("Contact Deleted Successfully",HttpStatus.OK); // Verbose Constructor

    }
}
