const Tandem = `
type Tandem {
    id: ID!
    user: String!
    languages : Language

}

type Language{
    offer: [String]
    search: [String]
}
`;
export default Tandem;