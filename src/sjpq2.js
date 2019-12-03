const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');



let goodslist = []

var options = {
    method: 'GET',
    url: 'https://www.blackbirdsport.com/public/routes',
    qs: { section: '33' },
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
    }
};
let a = new Promise(function (res, rej) {
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
            goodslist.push(goods)
            res(goodslist)
        })
    })
})
a.then((goodslist) => {
    request(options, (error, response, body) => {

        let $ = cheerio.load(body);
        $('.col-md-3').each((idx, ele) => {
            let $li = $(ele);

            let info_src = 'https://www.blackbirdsport.com/' + $li.find('.caption a').attr('href') + '#/route/route-info'
            var options = {
                method: 'GET',
                url: info_src,
                qs: { section: '33' },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
                }
            }
            let index = idx
            request(options, (error, response, body) => {
                $ = cheerio.load(body)
                let a_src1 = []
                let imgurls = []
                let goods2 = {
                    imgurls
                }
                //轮播图
                $('.carousel-inner').each((idx, ele) => {
                    let $li1 = $(ele);
                    let a = $li1.find('img')
                    for (var i = 0, len = a.length; i < len; i++) {
                        imgurls.push(a.eq(i).attr('src'))
                    }
                    a_src1.push(goods2)
                })
                goodslist[index].a_src = a_src1

                //个人资料
                goods2.info_top_img = $('.media-object').attr('src')

                // $('.create-route-user media-left img').attr('src')

                // fs.appendFile('./hn_xianlu.json', JSON.stringify(goods), err => {
                //     if (err) throw err;
                //     console.log('write over');
                // })
                // console.log(goodslist);
            })
        })
        // setTimeout(function () {
        //     fs.appendFile('./hn_xianlu.json', JSON.stringify(goodslist), err => {
        //         if (err) throw err;
        //         console.log('write over');
        //     })
        // }, 10000);
    })
})
// a.then((goodslist)=>{
//     console.log(goodslist);

// })


    // return result
    // console.log(goodslist);
// console.log(sj());







//sss


// //链接内容
// let info_src = 'https://www.blackbirdsport.com/' + $li.find('.caption a').attr('href') + '#/route/route-info'

// var options1 = {
//     method: 'GET',
//     url: info_src,
//     qs: { section: '33' },
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
//     }
// }
// request(options1, (error1, response1, body1) => {
//     $ = cheerio.load(body1)
//     let a_src1 = []
//     let imgurls = []
//     let goods2 = {
//         imgurls
//     }
//     //轮播图
//     $('.carousel-inner').each((idx1, ele1) => {
//         let $li1 = $(ele1);
//         let a = $li1.find('.carousel-inner img')
//         for (var i = 0, len = a.length; i < len; i++) {
//             imgurls.push(a.attr('src'))
//         }
//         a_src1.push(goods2)
//     })
//     //个人资料
//     goods2.info_top_img = $('.media-object').attr('src')

//     goods2.info_top_id = $('.media .city-time .text-overflow').eq(1).text()
//     console.log($('.create-route-user .activity-info .text-overflow span').eq(1).text());

//     goods.a_src = a_src1

//     // $('.create-route-user media-left img').attr('src')

//     // fs.appendFile('./hn_xianlu.json', JSON.stringify(goods), err => {
//     //     if (err) throw err;
//     //     console.log('write over');
//     // })
//     console.log(goods);
// })

