import { User } from '../models/user';

import { Role } from '../models/role.enum'

export const user: User[]= [

    { id: 1, username: 'JohnDeer', password: 'tractor', role: Role.BASIC_USER, imageId: 'test'},

    { id: 2, username: 'Johnboi', password: 'trc', role: Role.BASIC_USER, imageId: 'test'},

    { id: 3, username: 'DeerJohn', password: 'tra', role: Role.BASIC_USER, imageId: 'test'},

    


];