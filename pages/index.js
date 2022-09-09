import Head from "next/head";
import Container from "../components/cointeiner";
import fetch from "isomorphic-fetch";
import  Users  from "../components/User";

const Index = (props) => { 
    
    return (
        <div>
            <Head>
                <title> Home</title>
            </Head>
        
        <Container>

      <Users users={props.users}/>
          

        </Container>
        </div>
     )

    
     }
     Index.getInitialProps = async (ctx)=>{
        const res= await fetch('https://reqres.in/api/users?page');
        const resJSON= await res.json();
        return{users:resJSON.data}
     

   
    
};
export default Index