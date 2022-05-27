import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Grid,Item,Container,Card,CardImage,CardText,Button } from '../components/styled';
import { Loader } from '../components/loader';

export default function Home() {
    //Defining the states
    const [users, setUsers] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            // Calling users API
            const response = await fetch(`/api/users`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              },
            });
            const users = await response.json();
            //Changing the users state
            setUsers(users.users);//Adding user data to user state
            setLoaded(true);//Updating the isLoaded state to true
        }
        //Calling the fetchUsers() function
        fetchUsers();
    },[]);

    //Using Loader until api is fetched
    if(!isLoaded){
        return (
            <Container>
                <Loader />
            </Container>
        )
    }else{
        return (
            <Container>
                <Grid>
                    {
                        users.map((user) => {
                            return (
                                <Item key={user.id}>
                                    <Card>
                                        <CardImage>
                                            <img src={user.avatar} />
                                        </CardImage>
                                        <CardText>
                                            {user.first_name+' '+user.last_name}
                                        </CardText>
                                        <Link href={"/users/"+user.first_name.toLowerCase()+"-"+user.last_name.toLowerCase()+"-"+user.id}> 
                                            <Button>
                                                <button>View User</button>
                                            </Button>
                                        </Link>
                                    </Card>
                                </Item>
                            )
                        })
                    }
                </Grid>
            </Container>
        )
    }
}
