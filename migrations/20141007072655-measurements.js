var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('measurements', {
		id: { type: 'int', primaryKey: true },
		measurement: { type: 'numeric' },
		created_at: { type: 'timestamp' }
	}, callback);
};

exports.down = function(db, callback) {
  db.dropTable('measurements', callback);
};
