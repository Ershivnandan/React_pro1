import React, {useState} from 'react';



export default function Form1() {

  const DataChange = (event)=>{

    if(event.target.id === 'uemail'){
      Uemail(event.target.value);
    }
    else if(event.target.id === 'upass'){
      UPass(event.target.value);
    }
  }

  const ChangeUpCase = () =>{
      let newText = userEmail.toUpperCase();
      Uemail(newText);
  }

  const ChangeLowCase = () =>{
    let newText = userPass.toLowerCase();
    UPass(newText);
  }

  const [userEmail, Uemail] = useState ();
  const [userPass, UPass] = useState ();

  return (
   <>
        <div className="container">
              <h3 className='d-flex justify-content-center text-light mb-3'>Login/sign-Up</h3>

              <div className='d-flex justify-content-center input-form'>
                <ul>
                  <li>
                    <input 
                    placeholder='To upper Case' 
                    value={userEmail} type="text" 
                    name="uemail" 
                    id="uemail"
                    onChange={DataChange} />

                  </li>
                  <li>
                    <input 
                    placeholder='To Lower Case'  
                    value={userPass} type="text"
                    name="upass" 
                    id="upass" 
                    onChange={DataChange}
                    />

                  </li>
                  <li>
                    <button 
                    className='btn btn-primary' 
                    onClick={ChangeUpCase}
                    >
                      To Upper Case
                      </button>
                  </li>

                  <li>
                    <button 
                    className='btn btn-primary mt-4 mb-4' 
                    onClick={ChangeLowCase}
                    >
                      To Lower Case
                      </button>
                  </li>
                </ul>

              </div>
          </div>

   </>
  )
}
