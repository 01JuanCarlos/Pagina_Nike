$(document).ready(function () {
    var contador=1;
    var sumar=0;
    //imagenes slider
    var img1 = $('#img-sld-1')
    var img2 = $('#img-sld-2')
    var img3 = $('#img-sld-3')
    var img4 = $('#img-sld-4')
    //botones
    var bn1 = $('#control1')
    var bn2 = $('#control2')
    var bn3 = $('#control3')
    var bn4 = $('#control4')
    //flechas nav
    var array=$('.slider-control ul li');
    btnnext=$('.btn-next').click(function() {
    desplazar('right');
    });
    btnleft=$('.btn-left').click(function() {
        desplazar('left');
    });
    btnright=$('.btn-right').click(function() {
        desplazar('right');
    });
    content_btn=$('.content-nav-btn');
    //
    var linea=$('.linea')
    var px = 0;
    //cambiar descripcion
    function descripcion(title="", subtitlep="", subtitleh2="", precio="", descrip="") {
        $('.title-big').fadeOut('fast', function() {
            $(this).text(title).fadeIn('fast');
        });
        $('.subtitlep').fadeOut('fast', function() {
            $(this).text(subtitlep).fadeIn('fast');
        });
        $('.subtitleh2').fadeOut('fast', function() {
            $(this).text(subtitleh2).fadeIn('fast');
        });
        $('.precio').fadeOut('fast', function() {
            $(this).text(precio).fadeIn('fast');
        });
        $('.descrip').fadeOut('fast', function() {
            $(this).text(descrip).fadeIn('fast');
        });
    }
    ///Eventos de botones
    bn1.click(zapatilla1);
    bn2.click(zapatilla2);
    bn3.click(zapatilla3);
    bn4.click(zapatilla4);
    //evento click
    function desplazar(direccion=''){
         
       
        console.log(px)
        var element=$('.slider-control ul li:nth-child('+contador+')');
        $('.slider-control ul li').attr('aria-disabled', 'false');
        element.attr('aria-disabled', 'true');
       
       
        if(direccion==='right'){    
            contador++;
            console.log(contador)
        }
        if(direccion==='left'){
            contador--;
        }
        else{
            btnnext.hide();
            content_btn.show();
        } 
       
        if(contador>array.length){
            content_btn.hide();
            btnnext.show();
            px = 0; 
            contador=1;
       
        }
        if(contador<=1){
           
            content_btn.hide();
            btnnext.show();
        }
       
        if (element.attr('aria-disabled') === 'true') {
            switch (contador) {
                case 1:
                    zapatilla1()
                  break;
                case 2:
                    zapatilla2()
                    break;
                case 3:
                    zapatilla3()
                    break;
                case 4:
                    zapatilla4()
                    break;
            }
        } else {

        }
    }


   
    //tranciciones de zapatillas
    function zapatilla1() {
        linea.css('left','0px'); 
        descripcion('AIR JORDAN 1 LOW SE CHINESE NEW YEAR','Woman’s Shoes','AIR JORDAN 1 LOW SE CHINESE NEW YEAR','S/749.90','Empieza el Año del Dragón con estilo. Este elegante AJ1 tiene un logotipo Swoosh texturizado inspirado en la única criatura mitológica del zodiaco chino. Detalles como el Jumpman bordado metálico en la lengüeta y el forro de satén del cuello aportan un toque de brillo a la celebración.')
        img1.animate({
            'width': '81%',
            'left': '0px',
            'top': '34px',
        });
        img2.animate({
            'width': '453px',
            'top': '-28px',
            'left': '-12%',
            'z-index':'1'
        });
        img3.animate({
            'width': '81%',
            'left': '0px',
            'top': '10px'
        })
        img4.animate({
            'width': '0%',
            'top': '-118px',
            'left': '30px',
            'z-index':'0'  
        })
    }
    function zapatilla2() {
        linea.css('left','86px'); 
        descripcion('Jordan Stadium 90','Woman’s Shoes','Jordan Stadium 90','S/689.90','Evoluciona tu juego. El Stadium 90 toma eelementos de los grandes y los forja en algo totalmente único. Este es un nuevo clásico, combina eelementos icónicos de diseño del AJ1 y AJ5, y hace énfasis en la comodidad, durabilidad y estabilidad.')
        img1.animate({
            'width': '449px',
            'left': '0px',
            'top': '63px',
            'z-index':'1'
        });
        img2.animate({
            'width': '20%',
            'top': '337px',
            'left': '-12%',
            'z-index':'0'
        });
        img3.animate({
            'width': '0%',
            'left': '28px',
            'top': '-150px'
        })
        img3.fadeOut(200);
        img4.animate({
            'width': '81%',
            'top': '-212px',
            'left': '0px'
        })
    }
    function zapatilla3() {
        linea.css('left','172px'); 
        descripcion('Jordan Tatum 1','Men’s Shoes','Jordan Tatum 1','S/569.90','Tu amor por el juego nunca se desvanece. Por eso Tatum 1 se creó pensando en la longevidad. Diseñada para llevarte del primer al cuarto partido (y a cualquier OT que surja) de la forma más eficiente posible, la hemos reducido a lo esencial;y hemos hecho que lo esencial sea muy, muy bueno. ')
        img1.animate({
            'width': '81%',
            'top': '405px',
            'left': '5px',
            'z-index':'0'
        });
        img2.animate({
            'width': '0%',
            'left': '0%',
            'top':'189px',
            'z-index':'0'
        });
        img2.fadeOut(200);
        img3.animate({
            'width': '81%',
            'left': '6px',
            'top':'-360px'
        })
        img3.fadeIn(100); 
        img4.animate({
            'width': '465px',
            'z-index':'1',
            'top': '-202px',
            'left':'3px'   
        })
    }
    function zapatilla4() {
        linea.css('left','258px'); 
        descripcion('LeBron NXXT Gen AMPD','Men’s Shoes','LeBron NXXT Gen AMPD','S/749.90','Ya sea que ames hacer clavadas tipo torneo o seas una maravilla debajo del aro que vive en la zona de tiro, siente mayor velocidad, más contacto con el suelo de la cancha y confianza con el LeBron NXXT Gen.')

        img1.animate({
            'width': '0%',
            'top': '286px',
            'left': '31px'
        });
        img1.fadeOut(200);
        img2.fadeIn(200); 
        img2.animate({
            'width': '19%',
            'left': '-11%',
            'top': '-17px'
        });
        img3.animate({
            'width': '455px',
            'left': '6px',
            'top':'-342px'
        })
        img4.animate({
            'width': '96px',
            'left': '3px',
            'top': '145px'
        })
    }
})
