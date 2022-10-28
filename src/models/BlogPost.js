const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    }
  );

  PostTable.associate = (models) => {
    PostTable.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'user_id',
    })
  };

  return BlogPost;
};

module.exports = BlogPostModel;
