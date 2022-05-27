import { User } from '../models/User.js'


export const register = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = new User({email, password});
        await user.save()
        return res.json({ok: true})
    } catch (error) {
        console.log (error)
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({email});
        if(!user) return res.status(403).json({error:'No existe el usuario'});

        const respuestaPassword = await user.comparePassword(password)
        if (!respuestaPassword)
        return res.status(403).json({error:'Contraseña incorrecta'});
        return res.json({ok:"login"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'Error de servidor'});
    }
}