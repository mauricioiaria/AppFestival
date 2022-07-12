const { src, dest, parallel } = require("gulp")
const sass = require("sass")(require('sass'));


// IMAGENES //

const webp = require('gulp-webp');

function versionWebp(done) {

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))

    done();
}


// CSS //

function css(done) {

    src('src/scss/app.scss')// IDentificar el archivo SASS
        .pipe(sass())   // Compilarlo
        .pipe(dest("build/css")) // Almacenarla en el disco duro


    done(); // Callback que avisa a gulp cuando llegamos al final
}

exports.css = css;
exports.versionWebp = versionWebp;
