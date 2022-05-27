export default async function handler(req, res){
    //req and res are request and response
    const { uid } = req.query
    // Checking if request method is GET only
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET')
        return res.status(405).end()
    }
    //Calling the user api with uid
    const user =  await fetch(`https://reqres.in/api/users/${uid}`)

    // Returning error when api is not fine
    if(!user.ok){
        res.status(500).json({ errors: [{ message: `Unable to fetch API`,},]})
    }
    //Storing data from user api to data const
    const { data } = await user.json()
    res.status(200).json({ user: data });

}