const express=require('express');
const ejs=require('ejs');
let router=express.Router();
router.get('/',async (req,res,next)=>{
    let html=await ejs.renderFile('./template/ejs/1.html',{
        str:'快吃饭了',
        HL:'<b>反正我不是标签不信你试试</b>',
        arr:[1,2,3,4,5],
        fter:'./components/footer.html'
    })
    // console.log(html);
    res.send(html)
})
module.exports=router;