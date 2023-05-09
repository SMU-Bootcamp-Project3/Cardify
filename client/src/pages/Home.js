import React from 'react';
import { useQuery } from '@apollo/client';

import SavedCardList from '../components/SavedCardList';
import SignUpForm from '../components/SignupForm';

import { QUERY_ME } from '../utils/queries'; 

const Home = () => {
    const { loading, data } = useQuery(QUERY_CARD);
    const cards = data?.cards || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 mb-3 p-3">
                    <SignUpForm />
                </div>
                <div className="col-12 col-md-10 mb-3 p-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <SavedCardList
                            cards={cards}
                            title="Here are the cards you've saved!"
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home; 