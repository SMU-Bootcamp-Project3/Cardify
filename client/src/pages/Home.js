import React from 'react';
import { useQuery } from '@apollo/client';

import Form from '../components/Form/Form';
import FormModal from '../components/FormModal/FormModal';

import { QUERY_CARDS }  from '../utils/queries'; 


const Home = () => {
    const { loading, data } = useQuery(QUERY_CARDS);
    const cards = data?.cards || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 mb-3 p-3">
                    <Form />
                </div>
                <div className="col-12 col-md-10 mb-3 p-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <FormModal
                            cards={cards}
                            title="Here are the cards you've created!"
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home; 