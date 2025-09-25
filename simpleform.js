import React,{useState}form'react';
function SimpleForm(){
const[formData,setFormData]=useState({name:",email:"});
const[submitted,setSubmitted]=useState(false);
const handleSubmit=(e)=>{
e.preventDefault();
setSubmitted(true);
};
const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};
if(submitted){
return(
<div style={{padding:'20px',textAlign:'center}}>
<h2>Thank you for submitting!</h2>
<p>We received your deatails.</p>
<button
onClick={()=>setSubmitted(false)}
style={{padding:'8px 16px',marginTop:'10px'}}
>
Submit Again
</button>
</div>
);
}
return(
<form onSubmit={handleSubmit}style={{padding:'20px'}}>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Your Name"
REQUIRED
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<inputtype="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Your Email"
required
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<button type="submit"style={{padding:'8px 16px',marginTop:'10px'}}>
Submit
</button>
</form>
);
}
export default SimpleForm;
