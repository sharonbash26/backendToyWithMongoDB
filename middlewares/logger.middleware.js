import { logger } from '../services/logger.service.js'

// module.exports = {
//     log,
// }

export async function log(req, res, next) {
    logger.info('Req was made', req.route.path)
    next()
}