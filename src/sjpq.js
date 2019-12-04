const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
var options = {
    method: 'GET',
    url: 'https://www.blackbirdsport.com/public/routes',
    qs: { section: '33' },
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
    }
};


let goodslist = []
request(options, (error, response, body) => {
    let $ = cheerio.load(body);
    $('.col-md-3').each((idx, ele) => {
        let $li = $(ele);
        let imgurl = $li.find('.thumbnail img').attr('src')

        let goods = {
            imgurl,
            title: $li.find('.caption h3').text(),
            cont: $li.find('.glyphicon').text(),
            a_src: []
        }

        //链接内容
        let info_src = 'https://www.blackbirdsport.com/' + $li.find('.caption a').attr('href') + '#/route/route-info'

        var options1 = {
            method: 'GET',
            url: info_src,
            qs: { section: '33' },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
            }
        }


        request(options1, (error1, response1, body1) => {
            $ = cheerio.load(body1)
            let a_src1 = []
            let imgurls = []
            let goods2 = {
                imgurls
            }
            //轮播图
            $('.carousel-inner').each((idx1, ele1) => {
                let $li1 = $(ele1);
                let a = $li1.find('.carousel-inner img')
                for (var i = 0, len = a.length; i < len; i++) {
                    imgurls.push(a.attr('src'))
                }
                a_src1.push(goods2)
            })
            //个人资料
            goods2.info_top_img = $('.media-object').attr('src')
            
            goods2.info_top_id = $('.media .city-time .text-overflow').eq(1).text()
            // console.log($('.create-route-user .activity-info .text-overflow span').eq(1).text());

            goods.a_src = a_src1

            // $('.create-route-user media-left img').attr('src')
            
            // fs.appendFile('./hn_xianlu.json', JSON.stringify(goods), err => {
            //     if (err) throw err;
            //     console.log('write over');
            // })
            console.log(goods);
        })
        
        goodslist.push(goods)

    })
}
)





//链接内容
// let info_src ='https://www.blackbirdsport.com/'+$li.find('.caption a').attr('href')+'#/route/route-info'

// var options1 = { 
//     method: 'GET',
//     url: info_src,
//     qs: { section: '33' },
//     headers: { 
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
//     } 
// }
// request(options1,(error1, response1, body1)=>{
//     $ = cheerio.load(body1)
//     let a_src1 = []
//     $('.carousel-inner').each((idx1,ele1)=>{
//         let $li1 = $(ele1);
//         let imgurls = []
//         let a = $li1.find('.carousel-inner img')
//         for(var i = 0,len=a.length;i<len;i++){
//             imgurls.push(a.attr('src'))
//         }
//         let goods2 = {
//             imgurls,
//         }
//         a_src1.push(goods2)
//     })
//     goods.a_src = a_src1
//     // console.log(a_src1);

// })