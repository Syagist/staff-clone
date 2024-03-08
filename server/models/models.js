const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Company = sequelize.define('company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true,},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    website: {type: DataTypes.STRING, unique: true,},
    views: {type: DataTypes.INTEGER},
    followers: {type: DataTypes.INTEGER},
    role: {type: DataTypes.STRING, defaultValue: "COMPANY"},
})

const Job = sequelize.define('job', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const EmploymentTerm = sequelize.define('employment_term', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    term: {type: DataTypes.STRING, allowNull: false},
})

const JobType = sequelize.define('job_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    term: {type: DataTypes.STRING, allowNull: false},
})

Company.hasMany(Job)
Job.belongsTo(Company)

Job.hasMany(Category)
Category.belongsTo(Job)

Job.hasMany(EmploymentTerm)
EmploymentTerm.belongsTo(Job)

Job.hasOne(JobType)
JobType.belongsTo(Job)

User.hasMany(Company, {as: 'favorites'});
Company.belongsTo(User)


// Type.belongsToMany(Brand, {through: TypeBrand })
// Brand.belongsToMany(Type, {through: TypeBrand })

module.exports = {
    User,
    Company,
    Category,
    Job,
    JobType,
    EmploymentTerm,
}




