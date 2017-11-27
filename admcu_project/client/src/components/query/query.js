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
