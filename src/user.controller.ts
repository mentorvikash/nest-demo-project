// we have to import controller form @nestjs/common
import { Controller, Get, Post, Req, Res, HttpStatus, HttpCode, Header, Redirect } from '@nestjs/common'
import { Request, Response } from 'express'
import { of } from 'rxjs'

// here define, this controller work for users path
@Controller("/users")
export class UserController {

    @Get("/profile")
    profile(@Req() req: Request) {
        return of({
            name: "revive coding"
        })
    }

    @Post("/profile/:id")
    // @Header('X-name', 'revive coding')
    // @HttpCode(HttpStatus.OK)
    @Redirect('/users/watcher', 302)
    singleProfile(@Res({ passthrough: true }) res: Response, @Res() req: Request) {
        // res.status(501) this will override other

        const rn = Math.random()*10 + 1

        if (rn > 5){
            return {
                url: '/users/watcher',
                status: 302
            }
        }else{
            return {
                url: '/users/',
                status: 302
            }
        }

        return {
            name: "post requst accepted"
        }

    }

    @Get("/watcher")
    watcher(@Req() req: Request) {
        return of({
            message: "watcher routes",
        })
    }

    @Get("/redirectpath")
    redirectPath(@Req() req: Request) {
        return of({
            message: "redirectpath routes",
        })
    }

}



// HttpStatus used to set status manually
// HttpCode used to set status code manually
// @Res({passthrough: true}) will allow user to either user custom res of can be set by nestjs

// dynamic routing
// const rn = Math.random()*10 + 1

// if (rn > 5){
//     return {
//         url: '/users/watcher',
//         status: 302
//     }
// }else{
//     return {
//         url: '/users/',
//         status: 302
//     }
// }