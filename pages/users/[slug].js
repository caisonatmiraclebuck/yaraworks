import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Container,Card,CardImage,CardText,SingleUser } from '../../components/styled';
import { Loader } from '../../components/loader';

export default function User() {
    const router = useRouter()
    //Getting slug value 
    const {slug} = router.query
    //Defining the states
    const [user, setUser] = useState({});
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        //Returning back if slug is undefined in first render
        if(!slug){
            return;
        }
        //Converting slug to array to get user id
        const slugArr = slug.split("-");
        const uid = slugArr[2];

        const fetchUser = async () => {
            // Calling single user API
            const response = await fetch(`/api/users/${uid}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              },
            });
            const user = await response.json();
            setUser(user.user);// Adding user data from api to user state
            setLoaded(true);// Updating the isLoaded to true
        }
        //Calling the fetchUsers() function
        fetchUser();
    },[slug]);

    if(!isLoaded){
        return (
            <Container>
                <Loader />
            </Container>
        )
    }else{
        return (
            <Container>
                <SingleUser>
                    <Card>
                        <CardImage>
                            <img src={user.avatar} />
                        </CardImage>
                        <CardText>
                            {user.first_name+' '+user.last_name}<br/><br/>
                            <div>
                                <a href={'mailto:'+user.email}>
                                    {user.email}
                                </a>
                            </div>
                        </CardText>
                    </Card>
                </SingleUser>
            </Container>
        )
    }

}