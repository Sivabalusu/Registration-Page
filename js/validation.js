$.validator.addMethod('phnvalidation',function(value,element,pattern){
    return this.optional(element)|| value.match(/^[\+]\d{1}[\(]\d{3}[\)]\d{3}[\-]\d{4}/);
},
                      'Please enter phonenumber in this format +d(ddd)ddd-dddd');
$.validator.addMethod('emailvalidation',function(value,element,pattern){
    return this.optional(element)|| value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
},
                      'Please enter the valid email Id e.g, xyz@xyz.com');
$.validator.addMethod('webvalidation',function(value,element,pattern){
    return this.optional(element)|| value.match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
},
                      'Please enter the valid web site address e.g,http://x.y.z');


$(document).ready(function()
{
    var validator = $("#signup").validate({
        rules: 
        {
            name: 
            {
                required: true,
                minlength: 3
            },
            email: 
            {
                required: true,
                emailvalidation: true
            },
            password: 
            {
                required: true,
                minlength: 8
            },
            confirmpswd:
            {
                required: true,
                equalTo: "#password"
            },
            phonenumber:
            {
                phnvalidation: true,
            },
            url:
            {
                webvalidation: true,
              
            },
        },
        messages:
        {
            name: 
            {
                required: "Name can not be empty",
                minlength: "Name must contain at least 3 characters"
            },
            email: 
            {
                required: "Email address can not be empty",
                email: "Please enter a valid email address like -xyz@xyz.com"
            },
            password: 
            {
                required: "password can not be empty",
                minlength: "password must contain at least 8 characters"
            },
            confirmpswd:
            {
                required: "Confirm Password must not be empty",
                equalTo: "Both passwords must match"
            },
            
        },

    });
    $("#reset").click(function(){
        validator.resetForm();
      });
});