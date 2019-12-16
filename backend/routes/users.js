var express = require('express');
var router = express.Router();

/* GET users listing. */


router.post('/login', async (req, res, next) => {
  if (req.body.username === 'mul14' && req.body.password === 'secret') {
    res.json({
      message: 'Authentication success',
      data: {
        username: 'mul14',
        name: 'Mulia',
        level: 'satpam',
        menus: [
          {path: '/', label: 'Home'},
          {path: '/camera', label: 'Camera'},
          {path: '/gudang', label: 'Gudang'},
        ]
      }
    })
  } else {
    res.status(401).json({
      message: 'Unauthorized'
    })
  }
})

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
