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
    
    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: "product",
            foreignKey: 'categoryId',
            timestamps: false
        })
    }
    return Category;
   
}