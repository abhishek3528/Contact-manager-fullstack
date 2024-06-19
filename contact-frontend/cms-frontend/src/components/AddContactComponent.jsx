import { useState } from "react"
import { createContact_api } from "../Services/ContactService"
import { useNavigate } from "react-router-dom"


const AddContactComponent = () => {
  const [phone, setPhone] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const [errors,setErrors]= useState({
    phone_err:'',
    firstName:'',
    lastName:'',
    email:''
  })
  
  const navigator=useNavigate();

    function saveContact(e){
      e.preventDefault();

      if(validateForm())
        {

      const contact={phone,firstName,lastName,email};
      // console.log(contact);
     
      createContact_api(contact).then((response)=>{
         console.log(response);
        
         navigator('/')
      })

    }
  }
    function validateForm(){
      let valid = true;

      const errorsCopy = {... errors}

      if(phone.trim()){
        errorsCopy.phone_err = '';
    } else {
        errorsCopy.phone_err = 'Phone number is required';
        valid = false;
    }

      if(firstName.trim()){
          errorsCopy.firstName = '';
      } else {
          errorsCopy.firstName = 'First name is required';
          valid = false;
      }

      if(lastName.trim()){
          errorsCopy.lastName = '';
      } else {
          errorsCopy.lastName = 'Last name is required';
          valid = false;
      }

      if(email.trim()){
          errorsCopy.email = '';
      } else {
          errorsCopy.email = 'Email is required';
          valid = false;
      }

      setErrors(errorsCopy);
      
      return valid;

  }
  return (
    <div className="container py-3">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
        <h2 className="text-center">Add Contact Page</h2> 
          <div className="card-body">
            <form>
              <div className="form-group mb-2 flex">
                <label className="form-label">Phone Number : </label>
                <input
                type="number"
                placeholder="Enter Phone Number"
                name="phne"
                value={phone}
                className={`form-control ${ errors.phone_err ? 'is-invalid': '' }`}
                onChange={(e)=>setPhone(e.target.value)}
                />
                { errors.phone_err && <div className='invalid-feedback'> { errors.phone_err} </div> }
              </div>
              <div className="form-group mb-2">
                <label className="form-label">First Name : </label>
                <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={firstName}
                className={`form-control ${ errors.firstName ? 'is-invalid': '' }`}
                onChange={(e)=>setFirstName(e.target.value)}
                />
                { errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div> }
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name : </label>
                <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={lastName}
                className={`form-control ${ errors.lastName ? 'is-invalid': '' }`}
                onChange={(e)=>setLastName(e.target.value)}
                />
                { errors.lastName && <div className='invalid-feedback'> { errors.lastName} </div> }
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email : </label>
                <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                className={`form-control ${ errors.email ? 'is-invalid': '' }`}
                onChange={(e)=>setEmail(e.target.value)}
                />
                { errors.email && <div className='invalid-feedback'> { errors.email} </div> }
              </div>
              <button className="btn btn-success " onClick={saveContact}>Submit</button>

            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AddContactComponent