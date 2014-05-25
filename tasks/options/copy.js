/*global module*/
'use strict';

module.exports = {
  dist: {
    files: [
      {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>',
        src: [
          '*.{ico,txt}',
          '.htaccess',
          'images/**/*.{webp,gif,jpg,jpeg,png}',
          'fonts/{,*/}*.*'
        ]
      },
      {
        expand: true,
        cwd: '<%= yeoman.app %>/scripts/vendor/chosen/',
        dest: '<%= yeoman.dist %>/images',
        src: ['{,*/}*.{webp,gif,jpg,jpeg,png}']
      }
    ]
  },
  requirejs: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/bower_components/requirejs/',
      src: 'require.js',
      dest: '<%= yeoman.dist %>/scripts/'
    }]
  }
};
