import { Role } from './role.enum';

export class User {
    public id: number;
    public username: string;
    public password: string;
    public role: Role;
    public imageId: string;

    constructor(id: number, username: string, password: string, role: Role, imageId: string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.imageId = imageId;
    }
}