export default async function handler(req, res){

    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET')
        return res.status(405).end()
    }

    const users =  await fetch(`https://reqres.in/api/users`)

    if(!users.ok){
        res.status(500).json({ errors: [{ message: `Unable to fetch API`,},]})
    }

    const { data } = await users.json()
    res.status(200).json({ users: data });

}