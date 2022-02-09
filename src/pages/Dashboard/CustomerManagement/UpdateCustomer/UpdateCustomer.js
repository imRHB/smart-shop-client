import React from 'react';
import styles from './UpdateCustomer.module.css';

const UpdateCustomer = () => {
    return (
        <div className={`${'container'}`}>
            <div className={`${'content-wrapper'}`}>
                <div className={`${'content-header'}`}>
                    <div className={`${'container-fluid'}`}>
                        <div className={`${'row mb-2'}`}>
                            <div className={`${'col-sm-6'}`}>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={`${'content'}`}>
                    <div className={`${'container-fluid'}`}>
                        <div className={`${'row'}`}>
                            <section className={`${'col-md-12'}`}>
                                <div className={`${'card'}`}>
                                    <div className={`${'card-header'}`}>
                                        <h3 className={`${styles.title}`}>Edit Customer
                                        </h3>
                                    </div>
                                    <div className={`${'card-body'}`}>
                                        <form method="post" id="myForm" >

                                            <div className={`${'form-row'}`}>
                                                <div className={`${'form-group col-md-6'}`}>
                                                    <label for="name">Customer Name</label>
                                                    <input type="text" name="name" className={`${'form-control'}`} />
                                                </div>
                                                <div className={`${'form-group col-md-6'}`}>
                                                    <label for="mobile_no">Mobile No</label>
                                                    <input type="text" name="mobile_no" className={`${'form-control'}`} />
                                                </div>
                                                <div className={`${'form-group col-md-6'}`}>
                                                    <label for="email">Email</label>
                                                    <input type="email" name="email" className={`${'form-control'}`} />
                                                </div>
                                                <div className={`${'form-group col-md-6'}`}>
                                                    <label for="address">Address</label>
                                                    <input type="text" name="address" className={`${'form-control'}`} />
                                                </div>
                                                <br />
                                                <div className={`${'form-group col-md-6'}`}>
                                                    <input type="submit" value="Update" className={`${'btn btn-primary'}`} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UpdateCustomer;