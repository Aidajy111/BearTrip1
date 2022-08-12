
$(function(){
    const dutton = $('#signUp')
    dutton.on('click', function(e){
        e.preventDefault()
        $('#popUP').addClass('active')
    });
});
$(function(){
    $('#signUpTwo').on('click', function(e){
        e.preventDefault()
        $('#popUP').addClass('active')
    });


    const clouse = $('#pop_up_clouse')
    clouse.on('click', function(e){
        e.preventDefault()
        $('#popUP').removeClass('active')
    });

    
});
   

function accordion(parent){
    if($('.'+parent+' .adults__slides').css('display')=='block') {
        $('.'+parent+' .btn-num').removeClass('opened');
        $('.'+parent+' .adults__slides').css('display', 'none');
    }
    else {
        $('.'+parent+' .adults__slides').css('display', 'block');
        $('.'+parent+' .btn-num').addClass('opened');
    }
}
$('.adults .btn-num').on('click', function(){accordion('adults')});
$('.children .btn-num').on('click', function(){accordion('children')});

$(function(){
    const button2 = $('#btn-num1')
    button2.on('click', function(e){
        e.preventDefault()
        $('#adults__slides1').addClass('active2')
    });
})


$(function(){
    $('#guides-dtn').on('click', function(){
        $('#guides_berger').toggleClass('active2')
    })
})
$(function(){
    $('#guides-dtn2').on('click', function(){
        $('#guides_berger2').toggleClass('active2')
    })
})
$(function(){
    $('#guides-dtn3').on('click', function(){
        $('#guides_berger3').toggleClass('active2')
    })
})
$(function(){
    $('#guides-dtn4').on('click', function(){
        $('#guides_berger4').toggleClass('active2')
    })
})





  const nextButton = document.getElementById('next-one');
  const backButton = document.getElementById('back-one');
  let summPeople = document.querySelector('.tab-btn');
  var classEffects = document.querySelector('.adults__slides');

  console.log(backButton)


  const nextButtonTwo = document.getElementById('next-children');
  const backButtonTwo = document.getElementById('back-children');
  let summPeopleTwo = document.querySelector('.tab-btn-two');
  var classEffectsTwo = document.querySelector('.adults__slides-two');

  console.log(backButtonTwo)

const peopleUsIntejer = (next, back, summ, effects) =>{
            back.removeAttribute('disabled');
            next.removeAttribute('disabled');

        next.addEventListener('click', () => {
                summ.value ++;
                    if(summ.value >= 9){
                        next.removeAttribute('disabled');
                        summ.value = 9;
                        effects.classList.add('error');
                    } 
        })
        back.addEventListener('click', () =>{
            summ.value-- ;
                effects.classList.remove('error');
                    if(summ.value <= 1){
                        summ.value = 1;
                    }
        })
}

peopleUsIntejer(nextButtonTwo, backButtonTwo, summPeopleTwo, classEffectsTwo);
peopleUsIntejer(nextButton, backButton, summPeople, classEffects);


const menuButton = document.getElementById('container__btn');
const windowIcon = document.querySelector('.window-menu');
const closeMenuButton = document.querySelector('.container__btn2')

menuButton.onclick = () =>{
    windowIcon.classList.toggle('active');
    document.body.classList.add('lock');
}
closeMenuButton.onclick = () =>{
    windowIcon.classList.toggle('active');
    document.body.classList.remove('lock');
}
