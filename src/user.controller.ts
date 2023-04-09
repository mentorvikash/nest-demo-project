// we have to import controller form @nestjs/common
import { Controller, Get, Req } from '@nestjs/common'
import { Request } from 'express'
import { of } from 'rxjs'

// here define, this controller work for users path
@Controller("/users")
export class UserController {

    @Get("/profile")
    profile(@Req() req: Request) {
        
        return of ({
            name: "revive coding"
        })
    }

}



