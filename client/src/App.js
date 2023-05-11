import React from 'react';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react'
import {Button} from "react-bootstrap"
// import './App.css';

import Home from './pages/Home';
import SignUpForm from './pages/SignUpForm';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Form from './components/Form/Form';
import FormModal from './components/FormModal/FormModal'


import Card from './components/Card/Card'
import { ProtectedRoute } from './components/ProtectedRoute';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [ showModal, setShowModal ] = useState(false)
  const [ cardDetails, setCardDetails ] = useState({
    holiday: '',
    senderName: '',
    recipientName: '',
    customMessage: '',
    message: 'Happy Holidays',
    messageType: '',
    imageUpload: ''
  })

  const handleUpload = (event) => {
    console.log(event.target.files[0].name)
    setCardDetails({
      ...cardDetails, 
      imageUpload: URL.createObjectURL(event.target.files[0])
    })
}

  const handleInputChange = (event) => {
    setCardDetails({
      ...cardDetails,
      [event.target.name]: event.target.value
    })
  }

  const handleShow = () => {
    setShowModal(true)
  }

  useEffect(() => {
    // setShowModal(true)
  }, [])

  const closeModal = () => {
    setShowModal(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowModal(false)
    // Submit form data and redirect to page with the greeting card component displayed
    setCardDetails({
      ...cardDetails,
      [event.target.name]: event.target.value
    })

    console.log(cardDetails)  
  }

  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="App">
      <Header />
      <div className="App-header">
      <Routes>
      {/* <Route 
            path="/"
            element={<Home />}
          />
         <Route 
            path="/Login"
            element={<Login />}
          />
          <Route 
            path="/SignUpForm"
            element={<SignUpForm />}
          />
           <Route 
            path="/me"
            element={<Profile />}
          />
           <Route 
            path="/Profile/:username"
            element={<Profile />}
          /> */}
        <Route
          path="/"
          element={ 
            <>
              <h1 style={{margin: '2rem 0', fontFamily: `'Abel', sans-serif`}}>Click to create your own greeting card</h1>
              <Button variant="primary" onClick={handleShow}>
                Create your custom greeting card!
              </Button>
                <Card cardInfo={cardDetails} />
              <FormModal
                show={showModal}
                handleClose={closeModal}
                handleSubmit={handleSubmit}
              >
                <Form 
                handleSubmit={handleSubmit} 
                cardDetails={cardDetails} handleInputChange={handleInputChange}
                handleUpload={handleUpload}
                />
              </FormModal>
            </>
          }
        />
       <Route
          path="/protected"
          element={ 
            <ProtectedRoute>
              I am protected route
            </ProtectedRoute>
          }/>
      </Routes>
    </div>
    <Footer />
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
