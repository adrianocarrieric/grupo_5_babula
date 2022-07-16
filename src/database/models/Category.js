module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);
<<<<<<< HEAD
    
    Category.associate = function (models) {
=======

    Category.associate = function(models) {
>>>>>>> b965914de49703785da906afae8713434726db97
        Category.hasMany(models.Product, {
            as: "product",
            foreignKey: 'categoryId',
            timestamps: false
        })
    }
<<<<<<< HEAD
=======
    
>>>>>>> b965914de49703785da906afae8713434726db97
    return Category;
   
}