const Tandem = `
type Tandem {
    id: ID!
    user: String!
    languages : Language
    location : [Float]
}

type Language{
    offer: [String]
    search: [String]
}
`;
export default Tandem;