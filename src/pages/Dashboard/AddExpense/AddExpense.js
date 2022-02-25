import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DehazeIcon from '@mui/icons-material/Dehaze';const AddExpense = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = (data) => {

    }

    return (
        <div>
            <div style={{backgroundColor:'white'}} className='d-flex justify-content-between m-3'>
                <div className=' d-flex text-start ms-2'>
                <h1>
                    <AssignmentIcon style={{fontSize:'55px', backgroundColor:'#002447', color:'white'}}></AssignmentIcon>
                    </h1>
                  <div className='ms-2'>
                  <h5 className='fw-bold'>EXPENSE</h5>
                    <small className=''> Add Expense</small>
                  </div>
                 
                </div>
                <div>

                    <small className=' fw-bold border p-1'>Expense/Add Expense</small>
                </div>

            </div>
            <div className='text-end m-3'>
                <Link to="/expenseItem">
                    <button style={{ backgroundColor: '#002447' }} className='  text-light btn fw-bold py-1'><DehazeIcon></DehazeIcon> Add Expense</button>
                </Link>
            </div>
            <div style={{ marginTop: '60px' , backgroundColor:'white'}} className='container '>

                <div className='row shadow border pb-4 mb-3'>
                    <h5 className='text-start p-3 border'>Please Add  <span style={{ color: 'rgb(45, 55, 72)' }}> Expense</span> </h5>

                    <div className='col-12 col-lg-12 col-md-12 mt-5'>
                        <div className='text-center'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                             
                                        <span className='fw-bold'>Expense Item *</span>

                                        {/* <input style={{ width: '60%' }} className='field mb-3 ms-2 ' {...register("item", { required: true })} placeholder='Item Name ' /> <br /> */}

                                        <select style={{ width: '60%' }} className='field p-1 ms-2 mb-3 ' {...register("item")}>
                                                <option value="">Select Expanse...</option>
                                                <option value="Camping">Lunch</option>
                                                <option value="Cities">Snacks</option>
                                                <option value="Trips">Breakfast</option>
                                                <option value="Vacation">Electricity</option>
                                                <option value="Holiday">Salary</option>
                                                <option value="Advanture">Bounus</option>
                                                <option value="Advanture">Food</option>
                                                <option value="Advanture">Shop</option>
                                                <option value="Advanture">Water</option>
                                                <option value="Advanture">Gass</option>
                                            </select>
                                        {/* error */}
                                       
                                        <div className='  mt-2'>
                                            <div className=''>
                                                <span className='fw-bold'>Date *</span>
                                                <input style={{ width: '60%',marginLeft: '6%' }} className='field mb-3 ' type="date" {...register("date", { required: true })} placeholder='Date' /> <br />
                                               
                                            </div>
                                         
                                            <div className='mt-2'>
                                                <span className='fw-bold'>Amount *</span>
                                                <input style={{ width: '60%', marginLeft: '4%' }} className='field mb-3   ' type="number" {...register("cost", { required: true })} placeholder='Expense Amount ' /> <br />

                                         
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

export default AddExpense;