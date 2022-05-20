export default async function handler(req, res){
    const { uid } = req.query

    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET')
        return res.status(405).end()
    }

    const user =  await fetch(`https://reqres.in/api/users/${uid}`)

    if(!user.ok){
        res.status(500).json({ errors: [{ message: `Unable to fetch API`,},]})
    }

    const { data } = await user.json()
    res.status(200).json({ user: data });

}