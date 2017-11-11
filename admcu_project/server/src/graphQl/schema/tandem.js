const Tandem = `
type Tandem {
    id: ID!
    user: String!
    languages : Language
    location : Location
}

type Language{
    offer: [String]
    receive: [String]
}

type Location{
    latitude: String
    longitude: String
}
`;
export default Tandem;