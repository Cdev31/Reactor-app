const { Router } = require('express');
const ReactorController = require('./ReactorController');

const router = Router();

router.post('/adjust', ReactorController.adjust);
router.post('/reboot', ReactorController.reboot);

module.exports = router;
