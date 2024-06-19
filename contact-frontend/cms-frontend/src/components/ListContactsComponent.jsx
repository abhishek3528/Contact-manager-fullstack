import { useEffect, useState } from "react"
import { deleteContact_api, listContacts } from "../Services/ContactService";
import { useNavigate } from "react-router-dom";


const ListContactsComponent = () => {
    
    const [contacts, setContacts] =useState([]);

    const navigator= useNavigate();

    useEffect(()=>{

        showContacts();

    },[])

    const showContacts=()=>{
        listContacts().then((response)=>{
            setContacts(response.data); 
            console.log(response);
            console.log(response.data);
         })
         .catch(error=>{
                 console.error(error);   
             })
    }

    const addContact=()=>{
        navigator('/add-contact')
    }

    
    const updateContactPage=(id)=>
    {   
        //it is `(backtick) not '(single quotes)
        navigator(`/edit-contact/${id}`);
    }

    const deleteContact=(id)=>
    {
        //console.log(id);
        deleteContact_api(id).then((response)=>{
            console.log(response); 
            showContacts();
          })
          .catch(error=>{console.error(error);})
    }

  return (
    <div className="container">
        <h2 className="text-center">Contact Directory</h2>
        <button className="btn btn-primary my-3" onClick={addContact}>Add Contact</button>
        <table className="table table-striped table-bordered">
        {/* <table className="table table-striped table-dark table-bordered"> */}
            <thead className="table-dark">
                <tr>
                    <th>Phone Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((CONTACTS)=>
                
                    <tr key={CONTACTS.phone}>
                        <td>{CONTACTS.phone}</td>
                        <td>{CONTACTS.firstName}</td>
                        <td>{CONTACTS.lastName}</td>
                        <td>{CONTACTS.email}</td>
                        <td className="d-flex justify-content-evenly">
                            <button className="btn btn-info" onClick={()=>updateContactPage(CONTACTS.phone)}>Edit</button>
                            <button className="btn btn-danger" onClick={()=>deleteContact(CONTACTS.phone)}>Delete</button>
                        </td>
                    </tr>              
                )
                }
            </tbody>
        </table>
    </div>
    
  )
}

export default ListContactsComponent