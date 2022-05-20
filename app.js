const express= require('express')
const app=express()

const _=require('lodash');

const cors = require("cors");
app.use(cors());

const morgan = require('morgan');
app.use(morgan('dev'));

const upload = require('express-fileupload')
app.use(upload({createParentPath:true}))

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({limit: '20mb', extended: true}))
app.use(bodyparser.json({limit:'20mb', extended:true}))


const session = require('express-session');
app.use(session({secret:"Tophani2", saveUninitialized:true, resave:true}))


app.use(express.static('static'));


app.set('view engine', 'ejs')

const port = process.env.PORT || 4000


app.listen(port,()=>{
    console.log("http://localhost:4000");
})

app.get("/",(req,res)=>{
    
    res.render("form",{
        msg:""
    });
})

app.post('/', (req,res)=>{
    // console.log();
   
    // res.send("complete")
    const collect = req.body;
    if (collect.fname && collect.lname && collect.tel && collect.email && collect.loc && collect.Gender && collect.text && collect.message &&  collect.hobby && collect.status && collect.project && collect.ref) {
        
        const sess = req.session;
        if (req.files.image) {
            const image= req.files.image;
            if (image.mimetype=='image/jpeg') {
                image.mv('./static/upload/'+collect.fname+collect.lname+'.jpeg');
                sess.fname= collect.fname;
                sess.lname= collect.lname;
                sess.tel= collect.tel;
                sess.email= collect.email;
                sess.loc= collect.loc;
                sess.Gender= collect.Gender
                sess.text= collect.text;
                sess.message= collect.message;
                sess.hobby=collect.hobby;
                sess.status= collect.status;
                sess.project= collect.project;
                sess.ref= collect.ref
                res.redirect('/select/template')
                
            } else if(image.mimetype=='image/jpg') {
                image.mv('./static/upload/'+collect.fname+collect.lname+'.jpg')
                sess.fname= collect.fname;
                sess.lname= collect.lname;
                sess.tel= collect.tel;
                sess.email= collect.email;
                sess.loc= collect.loc;
                sess.Gender= collect.Gender
                sess.text= collect.text;
                sess.message= collect.message;
                sess.hobby=collect.hobby;
                sess.status= collect.status;
                sess.project= collect.project;
                sess.ref= collect.ref;


                res.redirect('/select/template')
                
            }else if(image.mimetype=='image/png'){
                image.mv('./static/upload/'+collect.fname+collect.lname+'.png')
                sess.fname= collect.fname;
                sess.lname= collect.lname;
                sess.tel= collect.tel;
                sess.email= collect.email;
                sess.loc= collect.loc;
                sess.Gender= collect.Gender
                sess.text= collect.text;
                sess.message= collect.message;
                sess.hobby=collect.hobby;
                sess.status= collect.status;
                sess.project= collect.project;
                sess.ref= collect.ref;


                res.redirect('/select/template')
            }else{
                res.render("form",{
                    msg:"Invalid filetype"
                })
            }
        } else {
            res.render("form",{
                msg:"upload an item"
            })

        }
        // console.log('hmm'); 
    
    }else{
        res.render("form",{
            msg:"fill the complete form"
        })
    }
})


app.get('/select/template',(req,res)=>{
    const sess= req.session
    if (sess.fname && sess.lname && sess.tel && sess.email && sess.loc && sess.Gender && sess.text && sess.message && sess.hobby && sess.status && sess.project && sess.ref) {
        res.render('selectpage')
    } else {
        res.redirect('/')
    }
})


app.get('/cv1',(req,res)=>{
    const sess =req.session

    if (sess.fname && sess.lname && sess.tel && sess.email && sess.loc && sess.Gender && sess.text && sess.message && sess.hobby && sess.status && sess.project && sess.ref) {
        res.render('Cv', {fname:sess.fname, lname:sess.lname, tel:sess.tel, email:sess.email, loc:sess.loc, Gender:sess.Gender, text:sess.text, message:sess.message, hobby:sess.hobby, status:sess.status,project:sess.project,ref:sess.ref})
    } else {
        res.redirect('/')
    }
})

app.get('/cv2',(req,res)=>{
    const sess =req.session

    if (sess.fname && sess.lname &&  sess.tel && sess.email && sess.loc && sess.text && sess.message && sess.hobby && sess.status && sess.project && sess.ref) {
        res.render('Cv2', {fname:sess.fname, lname:sess.lname,tel:sess.tel, email:sess.email, loc:sess.loc, Gender:sess.Gender, text:sess.text, message:sess.message,hobby:sess.hobby, status:sess.status, project:sess.project, ref:sess.ref})
    } else {
        res.redirect('/')
    }
})

app.get('/cv3',(req,res)=>{
    const sess =req.session

    if (sess.fname && sess.lname && sess.tel && sess.email && sess.loc && sess.text && sess.message && sess.hobby && sess.status && sess.project && sess.ref) {
        res.render('Cv3', {fname:sess.fname, lname:sess.lname,tel:sess.tel, email:sess.email, loc:sess.loc,Gender:sess.Gender, text:sess.text, message:sess.message,hobby:sess.hobby, status:sess.status,project:sess.project, ref:sess.ref})
    } else {
        res.redirect('/')
    }
})

app.get('/cv4',(req,res)=>{
    const sess =req.session

    if (sess.fname && sess.lname && sess.tel && sess.email && sess.loc && sess.Gender && sess.text && sess.message && sess.hobby && sess.status && sess.project && sess.ref) {
        res.render('Cv4', {fname:sess.fname, lname:sess.lname,tel:sess.tel, email:sess.email, loc:sess.loc, Gender:sess.Gender, text:sess.text, message:sess.message,hobby:sess.hobby, status:sess.status,project:sess.project, ref:sess.ref})
    } else {
        res.redirect('/')
    }
})

