import React,{Component} from 'react';
import { BackTop } from 'antd';
import '../scss/Help.min.css'
class Help extends Component{
    scrollToAnchor = (anchorName) => {
        
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'auto'}); }
        }
      }
    render(){
        
        return(
            <div id="help_main">
                <BackTop>
                    <div className="ant-back-top-inner" onClick={() => this.scrollToAnchor("help_main")}>^</div>
                </BackTop>
               <div className="col-md-4">
				<h2 id="header">快速访问</h2>
				<ul className="list-unstyled" onClick={this.gotoThis}>
                    <li><a onClick={() => this.scrollToAnchor("C1")}>1、如何进行骑行记录</a></li>
					<li><a onClick={() => this.scrollToAnchor("C2")}>2、如何进行GPS定位</a></li>
					<li><a onClick={() => this.scrollToAnchor("C3")}>3、如何解决拉直线/数据不准/总是出现继续骑行？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C4")}>4、华为手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C5")}>5、OPPO手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C6")}>6、iPhone手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C7")}>7、小米手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C8")}>8、魅族手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C9")}>9、中兴努比亚手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C10")}>10、酷派手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C11")}>11、乐视手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C12")}>12、VIVO手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C13")}>13.1 联想手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C132")}>13.2 金立手机如何设置？</a></li>
					<li><a onClick={() => this.scrollToAnchor("C14")}>14、如何查看自己的骑行记录</a></li>
					<li><a onClick={() => this.scrollToAnchor("C15")}>15、骑行记录的分享删除举报</a></li>
					<li><a onClick={() => this.scrollToAnchor("C16")}>16、如何下载离线地图</a></li>
					<li><a onClick={() => this.scrollToAnchor("C17")}>17、如何制作路书</a></li>
					<li><a onClick={() => this.scrollToAnchor("C18")}>18、如何导出路书</a></li>
					<li><a onClick={() => this.scrollToAnchor("C19")}>19、如何使用路书</a></li>
					<li><a onClick={() => this.scrollToAnchor("C20")}>20、如何创建和管理车队</a></li>
					<li><a onClick={() => this.scrollToAnchor("C21")}>21、如何加入车队</a></li>
					<li><a onClick={() => this.scrollToAnchor("C22")}>22、如何创建骑行活动</a></li>
					<li><a onClick={() => this.scrollToAnchor("C23")}>23、省电省流量的使用技巧</a></li>
					<li><a onClick={() => this.scrollToAnchor("C24")}>24、如何查看队友位置</a></li>
					<li><a onClick={() => this.scrollToAnchor("C25")}>25、如何查看和参加车队活动</a></li>
					<li><a onClick={() => this.scrollToAnchor("C26")}>26、如何查看比赛信息和使用路书</a></li>
					<li><a onClick={() => this.scrollToAnchor("C27")}>27、如何与其他骑友沟通</a></li>
					<li><a onClick={() => this.scrollToAnchor("C28")}>28、如何处理消息</a></li>
					<li><a onClick={() => this.scrollToAnchor("C29")}>29、如何分享给好友</a></li>
					<li><a onClick={() => this.scrollToAnchor("C30")}>30、如何升级到最新版本</a></li>
					<li><a onClick={() => this.scrollToAnchor("C31")}>31、如何修改个人资料</a></li>
					<li><a onClick={() => this.scrollToAnchor("C32")}>32、异常退出怎么办</a></li>
					<li><a onClick={() => this.scrollToAnchor("C33")}>33、黑鸟单车登录问题</a></li>
					<li><a onClick={() => this.scrollToAnchor("C34")}>34、用户信息无法获取的问题</a></li>
				</ul>
			</div>
            <div className="col-md-8">
				<h2>
					<a id="C1">1、如何记录骑行</a>
				</h2>
				<p>打开黑鸟单车，点下方的“开始”的圆形按钮即可进入骑行界面并开始进行记录，GPS定位后开始显示数据</p>
				<p>点击下方圆形的“停止”按钮，会出现两个圆形按钮“暂停”和“结束”，点“结束”数据会自动上传云端。并可以在骑行记录中看到了，点“暂停”进入手工暂停状态，继续记录需要点击下方圆形的“继续”按钮</p>
				<p>黑鸟单车在停止时可以支持自动暂停的，不需要操作，这时骑行时间会停止，不影响均速。</p>
				<p>手机可以定位的情况下，安卓手机和iPhone都可以设置为飞行模式进行记录，这样会更省电。</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201710/12335_1508087738261.png"/>

				<h2>
					<a id="C2">2、如何确定手机GPS可以定位</a>
				</h2>
				<p>黑鸟单车需要手机进行GPS定位，请在手机上为黑鸟单车授权，并打开GPS定位功能，这样数据才准确，注意地图的定位可以不用GPS。</p>
				<p>安卓手机有时候GPS 还没定位不上就开始骑行就会导致公里数丢失或者形成无效记录，安卓手机请打开数据网络和GPS，在室外进行定位，一般在几秒到几分钟，这是由你的手机GPS芯片和手机系统决定的</p>
				<p>
					如果记录是总是出现无效记录，这是手机GPS定位困难造成的，可以打开黑鸟--更多--GPS定位功能，先让手机进行gps定位。</p>
				<p>如果GPS定位成功就能显示出坐标，第一次使用请耐心等待几分钟。</p>
				<p>也可以点击右上角的图标，并确认，手机可以更新GPS卫星数据，加快定位进度。</p>
				<p>定位成功后再返回骑行界面，就可以开始记录了。</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/gps1.jpg"/>
				<p>iPhone的版本不存在以上问题，可以直接开始记录。</p>
				<h2>
					<a id="C3">3、如何解决拉直线/数据不准/总是出现继续骑行？</a>
				</h2>
				<p>由于黑鸟单车需要调用手机GPS，手机为了省电会强行关闭，需要对手机做设置。</p>
				<p>如果手机里安装了安全应用或者省电类应用，需要在该应用中将黑鸟单车加入保护名单</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/360.jpg"/>

				<h2>
					<a id="C4">4、华为手机如何设置？</a>
				</h2>

				<p>打开设置，如下界面</p>
				<p>选择应用和通知</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516085026184.jpg"/>
				<p>进入后，在显示的应用列表中选择黑鸟单车</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516085026185.jpg"/>
				<p>进入应用信息页面后，需要对 权限、通知、电池进行设置</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516084879400.jpg"/>
				<p>点击“权限”进入应用权限页面，设置如下</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516085430472.jpg"/>
				<p>同时可点击“设置单项权限”，进入后选择“信任此应用”，设置如下</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516085546930.jpg"/>
				<p>点击“通知”进行设置，设置如下图</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516085642327.jpg"/>
				<p>点击“电池”进入耗电详情页面</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516085676702.jpg"/>
				<p>高耗电提醒选择关闭</p>
				<p>点击“启动管理”，进行设置，设置如下</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516085881418.jpg"/>
				<p>其他额外设置</p>
				<p>在“应用信息”页面的高级设置如下</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516086033681.jpg"/>
				<p>左右滑动触摸键，显示后台运行的应用列表，给“黑鸟单车”进行加锁，设置如下</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201801/1502808_1516086174720.jpg"/>
				<p>EMUI4.0</p>
				<p>设置-应用管理-黑鸟单车-权限-设置单项权限-信任此应用 选择信任</p>
				<p>设置-应用管理-高级-忽略电池优化 点允许-所有应用-黑鸟单车 选择允许</p>
				<p>设置-应用管理-高级-在其他应用的上层显示 黑鸟单车 选择允许</p>
				<p>设置-高级设置-电池管理-省电模式，选择性能模式</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476341649710.jpg@1200w_1200h"/>
				<p>设置-高级设置-电池管理-受保护应用，打开黑鸟单车的开关，</p>
				<p>设置-高级设置-电池管理 右上角按钮-高耗电提醒-关闭 异常耗电清理-关闭</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476344589941.jpg@1200w_1200h"/>

				<p>EMUI3.0</p>
				<p>设置-受保护的后台应用-黑鸟单车，打开开关</p>
				<p>设置-省电管理-设置普通省电</p>
				<p>设置-省电管理-设置，异常耗电清理需要关闭</p>
				<p>另外在超级省电模式无法启动GPS进行定位</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/huawei.jpg"/>

				<h2>
					<a id="C5">5、OPPO手机如何设置？</a>
				</h2>
				<p>打开设置，如下界面</p>
				<p>选择【电池】</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201804/2833702_1523932917708.jpg"/>
				<p>关闭【低电量】如下图</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201804/2833702_1523932919768.jpg"/>
				<p>选择【黑鸟单车】如下图：</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201804/2833702_1523932921548.jpg"/>
				<p>进入黑鸟单车设置页面，需要设置三项内容：</p>
				<p>第一：关闭后台冻结</p>
				<p>第二：关闭异常耗电自动优化</p>
				<p>第三：深度睡眠</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201804/2833702_1523932923360.jpg"/>
				<p>OPPO 老手机：纯净后台-允许后台运行的应用，打开黑鸟单车的开关</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/oppo.jpg"/>

				<h2>
					<a id="C6">6、iPhone手机如何设置？</a>
				</h2>
				<p>设置-通用-允许后台程序刷新里，需要把黑鸟单车打开</p>
				<p>隐私-定位-黑鸟单车，需要设置为始终。</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/iphone.jpg"/>

				<h2>
					<a id="C7">7、小米手机如何设置？</a>
				</h2>
				<p>MIUI8.0：设置--电量和性能--省电优化--应用智能省电--黑鸟单车，选择无限制</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476438719355.jpg@1000w_1000h"/>
				<p>MIUI8.0：设置--电量和性能--神隐模式，选择关闭</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476438808164.jpg@1000w_1000h"/>


				<p>MIUI7.0：安全中心--电量--省电模式设置为我的模式</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/xiaomi1.jpg"/>

				<p>MIUI7.0：安全中心--电量--省电模式设置为我的模式</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/xiaomi1.jpg"/>
				<p>设置-其他高级模式-电量和性能-神隐模式，开关要关闭</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/xiaomi2.jpg"/>

				<h2>
					<a id="C8">8、魅族手机如何设置？</a>
				</h2>
				<p>魅族手机请在设置--定位服务（打开）--定位权限--把黑鸟单车设置为允许</p>
				<p>设置--电量管理--电源模式，选择高性能。</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476369542025.jpg@1000w_1000h"/>

				<p>设置--电量管理--省电优化--待机耗电管理，打开黑鸟单车的开关</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476369568605.jpg@1000w_1000h"/>

				<h2>
					<a id="C9">9、中兴努比亚手机如何设置？</a>
				</h2>
				<p>努比亚手机：在桌面上打开手机管家--清理加速，点右上角图标，点内存加速白名单，点添加将黑鸟单车加入</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476368934019.jpg@1000w_1000h"/>
				<p>在桌面上打开手机管家--电量节省--待机耗电管理--打开黑鸟单车开关</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476368937855.jpg@1000w_1000h"/>

				<p>中兴手机：设置--节电管理--应用节电管理--黑鸟单车，关闭所有开关</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/album/201610/12335_1476446059215.jpg@1000w_1000h"/>

				<h2>
					<a id="C10">10、酷派手机如何设置？</a>
				</h2>
				<p>酷派手机找到手机管家内的（净化大师）的系统自动净化设置，点开黑鸟单车</p>
				<p>内面有两项（1，防止开机自启和后台运行 2，智能回收后台进程）。点击关闭这两项就行了</p>

				<h2>
					<a id="C11">11、乐视手机如何设置？</a>
				</h2>
				<p>进入手机“管家”--省电管理--节点助手，关闭节点助手，或者只选择普通省电模式</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476367781555.jpg@1000w_1000h"/>

				<p>进入手机“管家”--省电管理--高级省电，关闭黑鸟单车的开关</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476367627303.jpg@1000w_1000h"/>

				<h2>
					<a id="C12">12、VIVO手机如何设置？</a>
				</h2>

				<p>打开设置，如下界面</p>
				<p>选择【电池】</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201806/2833702_1528790876448.jpg"/>
				<p>选择正常模式</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201806/2833702_1528790878649.jpg"/>
				<p>打开高耗电</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201806/2833702_1528790880795.jpg"/>
				<p>点击屏幕下方虚拟按钮调出【系统多任务界面】，点击黑鸟单车右上角的锁给应用加锁。</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201806/2833702_1528790883067.jpg"/>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201806/2833702_1528790884812.jpg"/>
				<p>打开设置，选择【更多设置】</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201806/2833702_1528790886364.jpg"/>
				<p>选择权限管理</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201806/2833702_1528790888367.jpg"/>
				<p>点击【黑鸟单车】</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201806/2833702_1528790890138.jpg"/>
				<p>开启所有权限</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201806/2833702_1528790892230.jpg"/>

				<h2>
					<a id="C13">13.1、联想手机如何设置？</a>
				</h2>
				<p>找到乐安全打开，点手机加速，点右上角菜单图标进入保护名单，将黑鸟单车的开关选中</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476358687897.jpg@800w_600h"/>
				<p>乐安全--敏感行为监控--设置黑鸟单车为信任</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201610/12335_1476358878428.jpg@800w_600h"/>

				<h2>
					<a id="C132">13.2 金立手机如何设置？</a>
				</h2>
				<p>在手机设置里找到电量管理，不要选择待机智能省电，然后进入省电管理</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201704/12335_1492962705378.jpg@800w_600h"/>
				<p>在省电管理中选择普通模式，点击右上角进入省电管理设置，关闭智能睡眠省电</p>
				<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201704/12335_1492963019909.jpg@800w_600h"/>


				<h2>
					<a id="C14">14、如何查看自己的骑行记录</a>
				</h2>
				<p>黑鸟单车的骑行记录会在有数据网络的时候自动同步保存在云端，不用担心换手机重装数据丢失问题。</p>
				<p>首页进入后，点击年度总积分，就可以进入个人骑行页面，查看所有的骑行记录。</p>
				<p>点击某条骑行记录可以打开，看到骑行记录的摘要、动态高程图以及详细骑行数据。</p>
				<p>点击轨迹图可以打开地图模式，产看详细轨迹，并可以切换到卫星模式。</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/record.jpg"/>

				<h2>
					<a id="C15">15、骑行记录的分享删除举报</a>
				</h2>
				<p>骑友对于自己的骑行记录可以分享和删除，对于别人的骑行记录可以分享和举报。</p>
				<p>打开骑行记录，点右上角的图标就可以看到分享 删除 或者举报按钮了。</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/recording.jpg"/>

				<h2>
					<a id="C16">16、如何下载离线地图</a>
				</h2>
				<p>黑鸟单车支持全国离线地图下载，这样就可以在不打开数据网络的情况下，使用地图查看轨迹了。</p>
				<p>在更多界面，点开离线地图就可以下载了，安卓版本使用的是百度地图，iPhone版本使用的是高德地图。</p>
				<p>安卓用的百度的离线地图可以按照省份下载，iphone用的高德的需要拼音搜索城市下载。</p>
				<p>有部分骑友出现离线地图无法下载的问题，请务必升级到黑鸟单车最新版本再试试。</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/offline-map.jpg"/>


				<h2>
					<a id="C17">17、如何制作路书</a>
				</h2>
				<p>黑鸟单车支持在手机上自己规划路线，制作路书，这样就可以跟骑路书不会迷路了。</p>
				<p>在更多界面打开“路书管理”，点右上角“制作”就进入路书制作界面了。</p>
				<p>
					在地图上设定好起点、途经点(可以不设置或者设置多个)以及终点，点“生成”就可以产生路线了，并可以显示距离和骑行时间，点“清除”可以重新开始规划线路，做好后点右上角的保存按钮就可以存为手机上的路书。
				</p>
				<p>注意：每次设置点时，必须先点击右上角的图标，图标呈浮起状态时，才能放在地图上。</p>
				<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/make-roadbook.jpg"/>
					<h2>
						<a id="C18">18、如何导出路书</a>
					</h2>
					<p>黑鸟单车允许用户导出其他骑友骑行的轨迹作为自己的骑行路书.</p>
					<p>
						点击骑行记录轨迹图，一直到打开地图模式，点左下角的”导出路书“，命名后就可以存在本地了，在更多界面的”路书管理“中可以查看，自己启动骑行后，进入地图模式，点”导入路书“就可以把路书轨迹呈现在地图上跟骑了。
					</p>
					<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/roadbookout.jpg"/>
						<h2>
							<a id="C19">19、如何使用路书</a>
						</h2>
						<p>骑友自己制作或者导出的路书，可以通过更多界面的“路书管理”进行查看和删除。</p>
						<p>
							在启动骑行后打开地图模式，点击左下角的“导入路书”就可以导入本地保存的路书轨迹了，这样路书轨迹和自己的骑行轨迹可以同时显示的地图上，就可以进行比对跟骑了。</p>
						<p>注意：骑行时为了安全不要一直查看地图，可以在不确定的路口停车后再查看。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/useroadbook.jpg"/>

						<h2>
							<a id="C20">20、如何创建和管理车队</a>
						</h2>
						<p>黑鸟单车支持为俱乐部创建车队功能，可以把俱乐部成员的骑行数据都集合在一起，形成俱乐部自己的排行榜和骑行主页，可以促进会员的骑行和骑行数据轨迹的分享.</p>
						<p>通过更多界面的“意见反馈”功能发送车队名称和所在城市就可以了，系统会审核后为你创建车队，车队由队长自己管理。</p>
						<p>车队的名称、队标、口号、背景照片、以及队员都是队长自己管理的。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/team.jpg"/>

						<h2>
							<a id="C21">21、如何加入车队</a>
						</h2>
						<p>骑友都可以通过点击排行榜界面左上角的图标，查看本地车队以及车队的骑行主页，在车队骑行主页的右上角有“加入”按钮，点击就可以加入车队了。</p>
						<p>每人最多可以加入五支车队。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/jointeam.jpg"/>

						<h2>
							<a id="C22">22、如何创建骑行活动</a>
						</h2>
						<p>黑鸟单车上只有队长和领队有权限创建骑行活动，打开活动界面，点右上角图标就可以创建发布活动了，发布活动有几个特点：</p>
						<p>队员报名活动要提交信息，并需要组织者审批通过</p>
						<p>活动可以通过push消息通知所有车队队员</p>
						<p>共享路书，组织者提前在手机上准备好路书随活动一同发布，队员可以查看并保存本地</p>
						<p>车队活动如果选择公开，则同城可见，不公开只有队员可以看到</p>
						<p>只有加入车队才能报名车队的骑行活动，希望通过大家组织的好活动，促进车队的发展</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/activity.jpg"/>

						<h2>
							<a id="C23">23、省电省流量的使用技巧</a>
						</h2>
						<p>省电</p>
						<p>省电是黑鸟单车的一大特点，单个电池都可以支持十几小时的骑行记录。</p>
						<p>黑鸟单车安卓版本有专门的长途省电模式，在长距离骑行时可以使用，会更省电。</p>
						<p>
							启动骑行后可以关闭数据网络，安卓手机甚至可以定位后打开飞行模式，或者不插SIM卡使用，而且黑鸟单车是自动暂停的，也会更加省电。</p>
						<p>iPhone手机可以启动后关闭数据网络和wifi，这样会更省电。</p>
						<p>省流量</p>
						<p>黑鸟单车在记录过程中是不需要数据网络支持的，开始骑行后就可以关闭数据网络。</p>
						<p>正常结束骑行后，也不用马上打开数据网络，可以在WIFI环境下黑鸟单车会自动上传刚才的记录，这样就更加省流量了。</p>

						<h2>
							<a id="C24">24、如何查看队友位置</a>
						</h2>
						<p>黑鸟单车有专有的黑鸟频道功能，可以互相查看队友位置。</p>
						<p>上报位置同时查看队友位置</p>
						<p>启动骑行后，点右上角图标，输入自定的六位黑鸟频道号，就可以开始上报位置了，同时可以看到队友位置。</p>
						<p>只查看队友位置</p>
						<p>在更多界面打开亲友看看，输入相应的黑鸟频道号，不用骑行也可以看到其他队友的位置，家人朋友可以通过这个功能查看你骑行的当前位置。</p>
						<p>注：队友位置不依赖车队，几个人就可以用，频道号是自己确定的，不需要设置，直接输入 。</p>
						<img className="img-responsive"
					src="http://pics.blackbirdsport.com/stream/201707/12335_1501331714993.jpg"/>

						<h2>
							<a id="C25">25、如何查看和参加车队活动</a>
						</h2>
						<p>在黑鸟单车的活动界面有我的活动、比赛和同城活动。</p>
						<p>“我的活动”是显示骑友归属车队发布的活动，和报名过的活动。</p>
						<p>“同城活动”显示同城的所有公开的骑行活动，可以在黑鸟单车上直接报名参加，并可以查看路书，导出路书进行跟骑。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/myactivity.jpg"/>

						<h2>
							<a id="C26">26、如何查看比赛信息和使用路书</a>
						</h2>
						<p>在黑鸟单车的活动界面中有一个比赛栏目。</p>
						<p>这里会发布全国各地的一些骑行赛事活动，并提供报名、路书以及成绩查询的支持，骑友可以直接报名参加，查看导出比赛线路以及成绩查询。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/match.jpg"/>

						<h2>
							<a id="C27">27、如何与其他骑友沟通</a>
						</h2>
						<p>黑鸟单车上很重要的功能就骑友间可以沟通交流。</p>
						<p>黑鸟单车的骑行记录是可以评论的，可以通过文字表情甚至图片进行评论。</p>
						<p>点击骑友的头像可以打开他的骑行主页，也可以进入他的个人资料，并可以私信沟通。</p>
						<p>骑行活动和比赛都可以进行评论。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/communicate.jpg"/>

						<h2>
							<a id="C28">28、如何处理消息</a>
						</h2>
						<p>消息是黑鸟单车中重要的功能，各种沟通都会通过消息push的方式通知骑友。</p>
						<p>消息通知包括评论、私信、活动通知、系统消息，车队消息等类型。</p>
						<p>在消息界面可以通过手指向左滑动消息进行删除处理。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/message.jpg"/>

						<h2>
							<a id="C29">29、如何分享给好友</a>
						</h2>
						<p>如果想将黑鸟单车分享给其他好友，可以通过更多界面的“分享给好友”功能。</p>
						<p>黑鸟单车内部的多个界面都可以分享到微博、微信好友、微信朋友圈、QQ、QQ空间、腾讯微博中。</p>
						<p>骑行记录、骑行图标、骑行轨迹、比赛、活动等界面均可以通过点右上角的图标进行分享。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/share.jpg"/>

						<h2>
							<a id="C30">30、如何升级到最新版本</a>
						</h2>
						<p>安卓手机打开黑鸟单车如果检测到有更新，会直接弹出对话框进行提示。</p>
						<p>也可以通个更多界面的“检测更新”功能手工进行更新。</p>
						<p>iPhone有了新版本，Appstore会自动提示的，在iOS7以上的版本会在wifi环境下自动升级。</p>
						<p>但是有时Appstore的升级不够及时，可以手工通过更多界面的“给黑鸟单车评分”打开Appstore手工进行升级。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/update.jpg"/>

						<h2>
							<a id="C31">31、如何修改个人资料</a>
						</h2>
						<p>黑鸟单车上个人资料非常重要，可以打开更多界面的“个人资料”进行修改。</p>
						<p>性别、体重、年龄将影响你的卡路里消耗的计算。</p>
						<p>所在城市会决定归属的本次排行榜以及看到的同城活动的内容。</p>
						<p>注意：修改个人资料，一定要先点击右上角的图标保存，再退出。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/info.jpg"/>

						<h2>
							<a id="C32">32、异常退出怎么办</a>
						</h2>
						<p>黑鸟单车有异常退出的找回机制。</p>
						<p>
							由于某种原因骑行记录过程中异常退出了，这时候不用着急，重新打开黑鸟单车就能看到提示，选择”上传记录”，就能把异常退出前的骑行数据找回来了。</p>
						<p>对于出现异常退出的情况请参看“3 如何解决异常退出问题”。</p>
						<p>也可以通过更多界面的“意见反馈”寻求帮助。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/unusual.jpg"/>

						<h2>
							<a id="C33">33、黑鸟单车登录问题</a>
						</h2>
						<p>黑鸟单车不需要注册，只要用自己的微博或者QQ账号就可以登录，这是新浪和腾讯提供的登录接口，不会泄露你的登录账号信息的。</p>
						<p>注意：请将手机上微博和QQ升级到最新版本，并保持网络畅通。</p>
						<p>有时会由于QQ或者微博的帐号出了问题会产生无法登陆的情况，请先登录微博或QQ，正常后，再登录黑鸟单车。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/login.jpg"/>

						<h2>
							<a id="C34">34、用户信息无法获取的问题</a>
						</h2>
						<p>
							有部分用户的手机会出现“用户信息无法获取”的问题，并导致黑鸟单车无法正常使用，这是由于该用户手机上安装了某种安全软件，禁止黑鸟单车读取手机的设备信息造成的。</p>
						<p>安装360卫士的请打开安全防护-隐私行为监控，找到黑鸟单车打开获取设备信息的权限，或者直接设置黑鸟单车为“信任”。</p>
						<p>LBE安全大师，打开权限管理-所有软件，找到黑鸟单车，打开“手机识别码”的选项，或者设置为“信任”就可以了。</p>
						<img className="img-responsive"
					src="http://blackbirdsport.com/static/img/help/safe.jpg"/>
			</div>
            </div>
        )
    }
}


export default Help;