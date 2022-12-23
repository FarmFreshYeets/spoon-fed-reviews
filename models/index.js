const User = require('./User')
const Recipe = require('./Recipe')
const Comment = require('./Comment')
// const Saved = require('./Saved')

User.hasMany(Recipe, {
    foreignKey: 'user_id'
})

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
})

// Recipe.belongsToMany(User, {
//     through: {
//         model: Saved,
//         unique: false
//     },

//     as: 'users_saved'
// })

// User.belongsToMany(Recipe, {
//     through: {
//         model: Saved,
//         unique: false
//     },
//     as: 'saved_recipes'
// })

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Recipe, Comment }