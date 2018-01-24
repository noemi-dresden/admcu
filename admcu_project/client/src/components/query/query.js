import React, { Component } from 'react';

import gql from 'graphql-tag';

export const TandemQuery =  gql`
query TandemQuery ($latitude: Float, $longitude: Float, $offer: String, $search:String ) {
    tandems (latitude: $latitude, longitude: $longitude, offer:$offer, search: $search){
        id
        user
        languages{
          offer
          search
        }
        location
    }
}
`
export const LoginMutation = gql`
mutation LogIn($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    email
  }
}
`

export const SignupMutation = gql`
mutation SignUp($username: String!,$email: String!, $password: String!) {
  signup(username: $username, email: $email, password: $password) {
    email
    username
    password
  }
}
`

export const ProbeQuery = gql`
query Probe {
  user(username:"ljupka"){
    id
   username
  }
}
`

export const getTandemsQuery = gql`
query getTandemsQuery {
  matches( offer: "german", search:"spanish"){
    id
    user
    languages{
      offer
      search
      }
    }
  }
`

export const TandemsAllQuery = gql`
query TandemsAllQuery {
    allTandems {
      user
      languages{
        offer
        search
      }
    }
  }
`
