export default async function handler(req, res){
    //req and res are request and response
    //Checking if request method is GET only
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET')
        return res.status(405).end()
    }
    //Calling the user api 
    const users =  await fetch(`https://reqres.in/api/users`)

    // Returning error when api is not fine
    if(!users.ok){
        res.status(500).json({ errors: [{ message: `Unable to fetch API`,},]})
    }
    //Storing data from user api to data const
    const { data } = await users.json()
    res.status(200).json({ users: data });

}