import React ,{ useState } from 'react'

const Contact = () => {
const [data, setData] = useState({
  fullname:'',
  phone:'',
  email:'',
  msg:'',
});

const  InputEvent =(e) =>{
  const {name, value} = e.target;
  
setData((preVal)=>{
  return {
     ...preVal,
     [name] :value,
  };
});

}
  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname}. 
     My number is ${data.phone}.
          My email address is ${data.email}.`);
  };
  return (
    <>
    <div className='my-5'>
      <h1 className='text-center'>Contact</h1>
    </div>
    <div className='container contact_div'>
      <div className='row'>
<div className='col-md-6 col-10 mx-auto'>


  <form onSubmit={formSubmit}>
  <div className="mb-3">
  <label for="name" className="form-label">Username:</label>
  <input type="text"
   className="form-control"
    id="name"
     name="fullname" 
     value={data.fullname} 
     onChange={InputEvent} 
     placeholder="Enter the name"/>
</div>
<div className="mb-3">
  <label for="phone" className="form-label">Mobile number :</label>
  <input type="number" 
  className="form-control" 
  id="phone"
   name="phone"
    value={data.phone} 
    onChange={InputEvent}
     placeholder="Mobile number"/>
</div>
<div className="mb-3">
  <label for="email" className="form-label">Email address</label>
  <input type="email"
   className="form-control" 
   id="email"
    name="email"
     value={data.email} 
     onChange={InputEvent} 
     placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="textarea" className="form-label">Message</label>
  <textarea 
  className="form-control" 
  id="textarea" 
  rows="3"
  name='msg'
  value={data.msg}
  onChange={InputEvent}>

  </textarea>
</div>
<div className='col-12'>
  <button className='btn btn-outline-primary'>Submit</button>
</div>
  </form>
</div>
      </div>
    </div>
    </>
  )
}

export default Contact;