package com.project.contact_manager.mapper;

import com.project.contact_manager.dto.ContactDTO;
import com.project.contact_manager.entity.Contact;

public class ContactMapper {

    //Here ContactDTO is DTO class which returns Response to Rest api calls
    //Here Contact is Entity class which links data in table of database.
    public static ContactDTO mapToContactDTO(Contact contact)
    {
        return new ContactDTO(
                contact.getPhonenum(),
                contact.getFirstName(),
                contact.getLastName(),
                contact.getEmail()
        );
    }
    public static Contact mapToContact(ContactDTO contactDTO)
    {
        return new Contact(
                contactDTO.getPhone(),
                contactDTO.getFirstName(),
                contactDTO.getLastName(),
                contactDTO.getEmail()
        );
    }
}
