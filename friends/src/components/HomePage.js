import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='col-4 mr-auto ml-auto mt-5'>
            <h2 className='text-center mt-3'>Sign In To See Your Friends!</h2>
            <Button block color='primary'>
                <Link to='/login'>
                    <h3 className='text-light'>Sign In!</h3>
                </Link>
            </Button>
        </div>
    )
}

export default HomePage;