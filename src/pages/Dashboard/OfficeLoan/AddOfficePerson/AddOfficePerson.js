import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import AssignmentIcon from '@mui/icons-material/Assignment';
const AddOfficePerson = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = (data) => {

    }

    return (
        <div >
           <div style={{ backgroundColor:'white' }} className="p-1">
           <div className='d-flex justify-content-between m-2'>
                <div className='text-start  d-flex'>
                    <h1>
                        <AssignmentIcon style={{fontSize:'60px', backgroundColor:'#002447', color:'white'}}></AssignmentIcon>
                    </h1>
              <div className='ms-3'>
              <h5 className='fw-bold'>Person</h5>
                    <small className=''> Add Person</small>
              </div>
                </div>
                <div>

                    <small style={{color:'#002447'}} className=' fw-bold border p-1'>Person/Add Person</small>
                </div>

            </div>
           </div>
            <div className='text-end m-3'>
                <Link to="/manageProducts">
                    <button style={{ backgroundColor: '#002447' }} className='  text-light btn fw-bold py-2'><FormatAlignJustifyIcon></FormatAlignJustifyIcon> Manage Person Loan</button>
                </Link>
            </div>
            <div style={{ marginTop: '60px' , backgroundColor:'white' }} className='container '>

                <div className='row shadow border pb-4 mb-3'>
                    <h5 className='text-start p-3 border'>Please Add  <span style={{ color: 'rgb(45, 55, 72)' }}> Person</span> </h5>

                    <div className='col-12 col-lg-12 col-md-12 mt-5'>
                        <div className='text-center'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                             
                                        <span className='fw-bold'>Expense Item *</span>

                                        <input style={{ width: '60%' }} className='field mb-3 ms-2 ' {...register("name", { required: true })} placeholder='Person Name ' /> <br />

                                       
                                        <div className='  mt-2'>
                                            <div className=''>
                                                <span className='fw-bold'>Phone *</span>
                                                <input style={{ width: '60%',marginLeft: '6%' }} className='field mb-3  ' type="number" {...register("phone", { required: true })} placeholder='Phone Number' /> <br />
                                               
                                            </div>
                                         
                                            <div className='mt-2'>
                                                <span className='fw-bold'>Address *</span>
                                                <input style={{ width: '60%', marginLeft: '4%' }} className='field mb-3   ' type="text" {...register("address", { required: true })} placeholder='Adsrss ' /> <br />
                                    </div>
                                 
                                </div>

                                <input style={{ backgroundColor: '#002447' }} className=' text-light btn fw-bold  px-5 py-2' type="submit" />

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

};

export default AddOfficePerson;