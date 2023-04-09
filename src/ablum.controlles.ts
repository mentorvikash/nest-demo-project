// we have to import controller form @nestjs/common
import { Controller, Get, Req } from '@nestjs/common'
import { Request } from 'express'

// here define, this controller work for users path
@Controller("/albums")
export class AlbumsController {

    @Get("/photo")
    profile(@Req() req: Request) {
        return "here is your photos"
    }

}



