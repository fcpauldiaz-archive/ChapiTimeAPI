/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		codigo_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'codigo_usuario',
				key: 'id'
			},
			unique: true
		},
		username: {
			type: DataTypes.STRING(180),
			allowNull: false
		},
		username_canonical: {
			type: DataTypes.STRING(180),
			allowNull: false,
			unique: true
		},
		email: {
			type: DataTypes.STRING(180),
			allowNull: false
		},
		email_canonical: {
			type: DataTypes.STRING(180),
			allowNull: false,
			unique: true
		},
		enabled: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		salt: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		last_login: {
			type: DataTypes.DATE,
			allowNull: true
		},
		confirmation_token: {
			type: DataTypes.STRING(180),
			allowNull: true,
			unique: true
		},
		password_requested_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		roles: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		nombre: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		apellidos: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		api_key: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		initials: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'usuario'
	});
};
