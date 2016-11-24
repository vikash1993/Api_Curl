var Employ = require('../models/employ.model.js');
var express = require('express');
var router = express.Router();

router.get('/employs', function(req, res, next) {

	Employ.find(function(err, employs) {
		if (err) {
			return res.send(err);
		}
		res.json(employs);
	});

});

/*router.route('/employs').get(function(req, res) {
	Employ.find(function(err, employs) {
		if (err) {
			return res.send(err);
		}
		res.json(employs);
	});
});
*/

router.route('/employs').post(function(req, res) {
	var employ = new Employ(req.body);

	employ.save(function(err) {
		if (err) {
			return res.send(err);
		}

		res.send({ message: 'Employ Added' });
	});
});


/*router.route('/employs')
	.get(function(req, res) {
		Employ.find(function(err, employs) {
			if (err) {
				return res.send(err);
			}

			res.json(employs);
		});
	})
	.post(function(req, res) {
		var employ = new Employ(req.body);

		employ.save(function(err) {
		if (err) {
			return res.send(err);
		}

		res.send({ message: 'Employ Added' });
	});
});
*/

router.route('/employs/:id').put(function(req,res){
	Employ.findOne({ _id: req.params.id }, function(err, employ) {
		if (err) {
			return res.send(err);
		}

		employ.name  	= req.body.name;
		employ.email 	= req.body.email;
		employ.age  	= req.body.age;
		employ.address  = req.body.address;

		// save the employ
		employ.save(function(err) {
			if (err) {
				return res.send(err);
			}

			res.json({ message: 'Employ updated!' });
		});
	});
});


router.route('/employs/:id').get(function(req, res) {
	Employ.findOne({ _id: req.params.id}, function(err, employ) {
		if (err) {
			return res.send(err);
		}

		res.json(employ);
	});
});


router.route('/employs/:id').delete(function(req, res) {
	Employ.remove({
		_id: req.params.id
	}, function(err, employ) {
		if (err) {
			return res.send(err);
		}

		res.json({ message: 'Successfully deleted' });
	});
});



module.exports = router;