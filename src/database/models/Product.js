
module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        ingredients: {
            type: dataTypes.STRING
        },
        img: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING,
        },
        categoryId: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        todaysDay: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);
<<<<<<< HEAD
    
   /*   Product.associate = function (models) {
        Product.hasOne(models.Category, {
            as: "category",
            foreignKey: 'id',
            timestamps: false
        })
    }  */
=======

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: 'categoryId'
        })
    }

>>>>>>> b965914de49703785da906afae8713434726db97
    return Product;
}