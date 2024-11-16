'use client'
import { useQuery, gql } from '@apollo/client';
import QueryResult from "@/components/query-result/query-result";

const GET_ALL_PERSONS = gql`
  query GetAllPersons {
    persons {
      rc
      name
      birth
      age
      condition
      mris {
        date
        scan
        condition
      }
    }
  }
`;


export default function Home() {

    const { loading, error, data } = useQuery(GET_ALL_PERSONS);
    // const { loading, error, data } = useQuery(GET_PERSON_BY_RC, {
    //     variables: { rc: "671007/1690" },
    // });
    return (

          <QueryResult loading={loading} error={error} data={data}>
          </QueryResult>

  );
}
