import { Perfil } from "./eperfil"

export default interface TUsuario{
    id?:number
    nome: string
    email: string
    senha: string
    perfil: Perfil
}
