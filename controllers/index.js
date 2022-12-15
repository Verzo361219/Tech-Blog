const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes')
const dashboredRoutes = require('./dashbored-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashbored', dashboredRoutes)

module.exports = router;