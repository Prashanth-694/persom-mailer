const mailer=require('nodemailer');
var config=require('config');
function sendMailer(userMail,userName,password)
{
const transport=mailer.createTransport({
    service:'gmail',
    auth:{
        user:config.get('mail.from'),
        pass:config.get('mail.password')
    } 
})

var mailOption={
    from:config.get('mail.from'),
    to:userMail,
    subject:'sending mail by node js.',
    text:`Your Registration Complited Succesfully,Here Are Your Credentials
    

    User Name:${userMail}
    Password :${password}

    Thank You!
    
    `
}
transport.sendMail(mailOption,function(error,info)
{
    if(error)
    {
        console.log("error occured in mailer")
    }
    else{
        console.log("mail sent sucesfully." +config.get('mail.from')+" "+config.get('mail.password')+" "+userMail+" "+userName+" "+password) 
    }
})
}
module.exports={sendMailer}