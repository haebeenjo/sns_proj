'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 게시글-유저
    await queryInterface.addColumn('Articles', "userId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("Articles", {
      fields: ['userId'],
      type: 'foreign key',
      name: "Users_Articles_id_fk",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 게시글-댓글
    await queryInterface.addColumn('Comments', "articleId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("Comments", {
      fields: ['articleId'],
      type: 'foreign key',
      name: "Comments_Articles_id_fk",
      references: {
        table: "Articles",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 게시글-태그(게시글)
    await queryInterface.addColumn('TagsOfArticles', "articleId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("TagsOfArticles", {
      fields: ['articleId'],
      type: 'foreign key',
      name: "TagsOfArticles_Articles_id_fk",
      references: {
        table: "Articles",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
    // 게시글-태그(회원)
    await queryInterface.addColumn('TagsOfArticles', "userId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("TagsOfArticles", {
      fields: ['userId'],
      type: 'foreign key',
      name: "TagsOfArticles_Users_id_fk",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 게시글 좋아요 테이블 생성
    await queryInterface.createTable('LikesOfArticle', { id: Sequelize.INTEGER });

    // 게시글-게시글 좋아요(게시글)
    await queryInterface.addColumn('LikesOfArticle', "articleId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("LikesOfArticle", {
      fields: ['articleId'],
      type: 'foreign key',
      name: "LikesOfArticle_Articles_id_fk",
      references: {
        table: "Articles",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
    // 게시글-게시글 좋아요(회원)
    await queryInterface.addColumn('LikesOfArticle', "userId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("LikesOfArticle", {
      fields: ['userId'],
      type: 'foreign key',
      name: "LikesOfArticle_Users_id_fk",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 회원-팔로우
    await queryInterface.addColumn('Follows', "userId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("Follows", {
      fields: ['userId'],
      type: 'foreign key',
      name: "Follows_Users_id_fk",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 회원-즐겨찾기
    await queryInterface.addColumn('Favorites', "userId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("Favorites", {
      fields: ['userId'],
      type: 'foreign key',
      name: "Favorites_Users_id_fk",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 회원-댓글
    await queryInterface.addColumn('Comments', "userId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("Comments", {
      fields: ['userId'],
      type: 'foreign key',
      name: "Comments_Users_id_fk",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 댓글 좋아요 테이블 생성
    await queryInterface.createTable('LikesOfComment', { id: Sequelize.INTEGER });

    // 댓글-댓글 좋아요(게시글)
    await queryInterface.addColumn('LikesOfComment', "articleId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("LikesOfComment", {
      fields: ['articleId'],
      type: 'foreign key',
      name: "LikesOfComment_Articles_id_fk",
      references: {
        table: "Articles",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 댓글 좋아요-회원
    await queryInterface.addColumn('LikesOfComment', "userId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("LikesOfComment", {
      fields: ['userId'],
      type: 'foreign key',
      name: "LikesOfComment_Users_id_fk",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 댓글-댓글 좋아요
    await queryInterface.addColumn('LikesOfComment', "commentId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("LikesOfComment", {
      fields: ['commentId'],
      type: 'foreign key',
      name: "LikesOfComment_Comments_id_fk",
      references: {
        table: "Comments",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 태그(댓글) 테이블 생성
    await queryInterface.createTable('TagsOfComment', { id: Sequelize.INTEGER });

    // 태그(댓글)-댓글
    await queryInterface.addColumn('TagsOfComment', "commentId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("TagsOfComment", {
      fields: ['commentId'],
      type: 'foreign key',
      name: "TagsOfComment_Comments_id_fk",
      references: {
        table: "Comments",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });

    // 태그(댓글)-회원
    await queryInterface.addColumn('TagsOfComment', "userId", { allowNull: false, type: Sequelize.INTEGER });
    await queryInterface.addConstraint("TagsOfComment", {
      fields: ['userId'],
      type: 'foreign key',
      name: "TagsOfComment_Users_id_fk",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });


  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
