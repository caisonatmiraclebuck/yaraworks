import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Container,Card,CardImage,CardText,SingleUser } from '../../components/styled';
import { Loader } from '../../components/loader';

export default function User() {
    const router = useRouter()
    const {slug} = router.query

    const [user, setUser] = useState({});
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!slug){
            return;
        }
        const slugArr = slug.split("-");
        const uid = slugArr[2];

        const fetchUser = async () => {
            const response = await fetch(`/api/users/${uid}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              },
            });
            const user = await response.json();
            setUser(user.user);
            setLoaded(true);
        }
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