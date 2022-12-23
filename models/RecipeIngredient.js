const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class RecipeIngredient extends Model {}

RecipeIngredient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'recipe',
                key: 'id'
            }
        },
        ingredient_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'ingredient',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe-ingredient'
      }
)

module.exports = RecipeIngredient