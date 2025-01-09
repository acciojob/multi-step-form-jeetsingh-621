import React from 'react'

const Step = ({step,handlesubmit,handleprev,handlenext,formdata,handleinputchange}) => {
  return (
    <div>

        <form onSubmit={handlesubmit}>
           {step === 1 && ( <div id='step1'>
                <h2>Customer Detail</h2>
                <label htmlFor="">First Name:</label>
            <input type="text"  required id='first_name' value={formdata.first_name} onChange={handleinputchange}/>
            <br /><br />
            <label htmlFor="">Last Name:</label>
            <input type="text" name="" id="last_name" required value={formdata.last_name} onChange={handleinputchange} />
            </div>)}

          {step === 2 && (
              <div id='step2'>
              <h2>Car Detail</h2>
              <label htmlFor="">Car Model:</label>
              <input type="text" name="" id="model" value={formdata.model} onChange={handleinputchange} required />
              <br /> <br />
              <label htmlFor="">Car Price:</label>
              <input type="text" name="" id="car_price" value={formdata.car_price}  onChange={handleinputchange} required/>
          </div>
          )}

        {step === 3 &&(
                <div id='step3'>
                <h2>Payment Detail </h2>
                <label htmlFor="">Card Info:</label>
                <input type="text" id='card_info' value={formdata.card_info} required />
                <br /> <br />
                <label htmlFor="">Expiry Date:</label>
                <input type="date" name="" id="expiry_date" required value={formdata.expiry_date} onChange={handleinputchange} />
            </div>
        )}
                <br /><br />
            <div>
                {step>1 && (<button onClick={handleprev} type='button'>Previous</button>)}

               {step<3 && ( <button onClick={handlenext} type='button'>Next</button>)}

               {step ===3 && (<button type='submit'>Submit</button> )}

            </div>


        </form>
    </div>
  )
}

export default Step