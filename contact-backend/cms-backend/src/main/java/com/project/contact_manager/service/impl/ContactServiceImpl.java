package com.project.contact_manager.service.impl;

import com.project.contact_manager.dto.ContactDTO;
import com.project.contact_manager.entity.Contact;
import com.project.contact_manager.exception.ResourceNotFoundException;
import com.project.contact_manager.mapper.ContactMapper;
import com.project.contact_manager.repository.ContactRepository;
import com.project.contact_manager.service.ContactService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ContactServiceImpl implements ContactService {

    private ContactRepository contactRepository;

    @Override
    public ContactDTO createContact(ContactDTO contactDTO) {
        Contact contact= ContactMapper.mapToContact(contactDTO);
        Contact saveContact=contactRepository.save(contact);
        return ContactMapper.mapToContactDTO(saveContact);
    }

    @Override
    public ContactDTO getContactByPhone(Long phone) {
        Contact contact= contactRepository.findById(phone)
                .orElseThrow(()->new ResourceNotFoundException("Contact doesn't exist with this given phone number"+phone));
        return ContactMapper.mapToContactDTO(contact);
    }

    @Override
    public List<ContactDTO> getAllContacts() {
        List<Contact> contacts=contactRepository.findAll();
        return contacts.stream().map((contact)->ContactMapper.mapToContactDTO(contact))
                .collect(Collectors.toList());
    }

    @Override
    public ContactDTO updateContact(Long phone, ContactDTO updatedContact) {
        Contact contact= contactRepository.findById(phone)
                .orElseThrow(()->new ResourceNotFoundException("Contact doesn't exist with this given phone number\"+phone"));
        contact.setPhonenum(updatedContact.getPhone());
        contact.setFirstName(updatedContact.getFirstName());
        contact.setLastName(updatedContact.getLastName());
        contact.setEmail(updatedContact.getEmail());

        Contact saveContact=contactRepository.save(contact);

        return ContactMapper.mapToContactDTO(saveContact);
    }

    @Override
    public void deleteContact(Long phone) {
        Contact contact= contactRepository.findById(phone)
                .orElseThrow(()->new ResourceNotFoundException("Contact doesn't exist with this given phone number\"+phone"));
        contactRepository.deleteById(phone);
    }
}
