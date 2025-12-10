const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint-new');
// 1. 일반 함수로 작업을 만듭니다.
function defaultTask(done) {
    //ESling를 실행
    gulp.src(["es6/**/*.js", "public/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());

    //노드 소스
    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    //브라우저 소스
    gulp.src('public/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
    done();
}

// 2. exports를 통해 내보냅니다.
exports.default = defaultTask;