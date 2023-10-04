$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: false,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Vamos lá, você tem um nome, não é?",
                    minlength: "Seu nome deve ter pelo menos 2 caracteres."
                },
                subject: {
                    required: "Qual é, você tem assunto, não é?",
                    minlength: "Seu assunto deve consistir em pelo menos 4 caracteres."
                },
                number: {
                    required: "Vamos lá, você tem um número, não tem?",
                    minlength: "Seu número deve ter pelo menos 5 caracteres."
                },
                email: {
                    required: "Sem email, sem mensagem.",
                    email: "Por favor coloque um email válido."
                },
                message: {
                    required: "Hum... sim, você precisa escrever algo para enviar este formulário.",
                    minlength: "Isso é tudo? Sério?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})