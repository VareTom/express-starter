module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {
            tableName: 'users',
            underscored: true,
            timestamps: true,
            paranoid: true,
            indexes: [
                {unique: true, fields: ['name']}
            ]
        }
    )

    return users;
}