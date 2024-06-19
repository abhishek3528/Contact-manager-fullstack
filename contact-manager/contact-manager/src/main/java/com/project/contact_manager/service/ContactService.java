package com.project.contact_manager.service;

import com.project.contact_manager.dto.ContactDTO;

import java.util.List;

public interface ContactService {
    ContactDTO createContact(ContactDTO contactDTO);

    ContactDTO getContactByPhone(Long phonenum);

    List<ContactDTO> getAllContacts();

    ContactDTO updateContact(Long phone, ContactDTO updatedContact);

    void deleteContact(Long phone);
}
