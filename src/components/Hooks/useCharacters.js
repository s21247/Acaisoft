import {gql, useQuery} from "@apollo/client";

const GET_CHARACTERS = gql`
query {
  characters{
    results {
      id
      image
      name
      species
      gender
    }
  }
}`
const UseCharacters = () => {
    const {error, data, loading} = useQuery(GET_CHARACTERS)

    return {
        error,
        loading,
        data
    }
};

export default UseCharacters;