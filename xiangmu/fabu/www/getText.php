<?php

error_reporting(0);
$page = $_GET['page'];
$id = $_GET['id'];

$text01 = array(
  'count'=>20,
  'num'=>4,
  'list'=>array(
	array('id'=>'1','name'=>'真融宝董事长吴雅楠被授予[北京市特聘专家]','date'=>'2017-3-22'),
	array('id'=>'2','name'=>'《真话楠说》:董事长吴雅楠告诉您现在该不该买房？','date'=>'2017-2-28'),
	array('id'=>'3','name'=>'真融宝喜获第十届金蝉奖，被评为“年度科技金融公司','date'=>'2017-1-19'),
	array('id'=>'4','name'=>'真融宝董事长吴雅楠告诉你2017投什么','date'=>'2017-1-18'))
);
$text02 = array(
  'count'=>20,
    'num'=>4,
    'list'=>array(
	array('id'=>'1','name'=>'真融宝因其卓越支付技术 荣获"fin-tech技术领先奖"','date'=>'2016-12-20'),
	array('id'=>'2','name'=>'真融宝和战略伙伴分期乐、买单侠一同入选年度新锐创业公司30强','date'=>'2016-12-7'),
	array('id'=>'3','name'=>'热烈祝贺真融宝交易额突破400亿','date'=>'2016-11-22'),
	array('id'=>'4','name'=>'11月西南用户见面会成功举办','date'=>'2016-11-21'))
);
$text03 = array(
'count'=>20,
  'num'=>4,
  'list'=>array(
	array('id'=>'1','name'=>'真融宝与国美控股达成全面战略合作','date'=>'2016-11-09'),
	array('id'=>'2','name'=>'真融宝作为北京唯一科技金融代表参加国家"双创"周活动','date'=>'2016-11-08'),
	array('id'=>'3','name'=>'10月天津用户见面会成功举办','date'=>'2016-11-08'),
	array('id'=>'4','name'=>'真融宝高管冲走隔壁玄奘之旅，4天112公里，创业砥砺前行','date'=>'2016-11-07'))
);
$text04 = array(
'count'=>20,
  'num'=>4,
  'list'=>array(
	array('id'=>'1','name'=>'真融宝冠名深圳卫视节目，一块投吧，获俞敏洪，张泉灵等加盟','date'=>'2016-11-06'),
	array('id'=>'2','name'=>'《真话楠说》:董事长吴雅楠告诉您现在该不该买房？','date'=>'2016-11-05'),
	array('id'=>'3','name'=>'真融宝喜获第十届金蝉奖，被评为“年度科技金融公司','date'=>'2016-11-04'),
	array('id'=>'4','name'=>'真融宝获邀参加国家工信部会议并作主题发言','date'=>'2016-11-03'))
);
$text05 = array(
'count'=>20,
  'num'=>4,
  'list'=>array(
	array('id'=>'1','name'=>'真融宝喜获第十届金蝉奖，被评为“年度科技金融公司','date'=>'2016-10-22'),
	array('id'=>'2','name'=>'真融宝和战略伙伴分期乐、买单侠一同入选年度新锐创业公司30强','date'=>'2016-10-20'),
	array('id'=>'3','name'=>'10月天津用户见面会成功举办','date'=>'2016-10-19'),
	array('id'=>'4','name'=>'真融宝董事长吴雅楠告诉你2016投什么','date'=>'2016-10-18'))
);

$p01= array(
'count'=>20,
  'num'=>4,
  'list'=>array(
	array('id'=>'1','name'=>'真融宝喜获第十届金蝉奖，被评为“年度科技金融公司','date'=>'2016-10-22'),
	array('id'=>'1','name'=>'真融宝冠名深圳卫视节目，一块投吧，获俞敏洪，张泉灵等加盟','date'=>'2016-11-06'),
	array('id'=>'1','name'=>'真融宝与国美控股达成全面战略合作','date'=>'2016-11-09'),
	array('id'=>'1','name'=>'真融宝因其卓越支付技术 荣获"fin-tech技术领先奖"','date'=>'2016-12-20'),
	array('id'=>'1','name'=>'真融宝董事长吴雅楠被授予[北京市特聘专家]','date'=>'2017-3-22'))
);

$p02= array(
'count'=>20,
  'num'=>4,
  'list'=>array(
	array('id'=>'2','name'=>'《真话楠说》:董事长吴雅楠告诉您现在该不该买房？','date'=>'2017-2-28'),
	array('id'=>'2','name'=>'真融宝和战略伙伴分期乐、买单侠一同入选年度新锐创业公司30强','date'=>'2016-12-7'),
	array('id'=>'2','name'=>'真融宝作为北京唯一科技金融代表参加国家"双创"周活动','date'=>'2016-11-08'),
	array('id'=>'2','name'=>'《真话楠说》:董事长吴雅楠告诉您现在该不该买房？','date'=>'2016-11-05'),
	array('id'=>'2','name'=>'真融宝和战略伙伴分期乐、买单侠一同入选年度新锐创业公司30强','date'=>'2016-10-20'))
);


$p03= array(
'count'=>20,
  'num'=>4,
  'list'=>array(
	array('id'=>'3','name'=>'真融宝喜获第十届金蝉奖，被评为“年度科技金融公司','date'=>'2017-1-19'),
	array('id'=>'3','name'=>'热烈祝贺真融宝交易额突破400亿','date'=>'2016-11-22'),
	array('id'=>'3','name'=>'10月天津用户见面会成功举办','date'=>'2016-11-08'),
	array('id'=>'3','name'=>'真融宝喜获第十届金蝉奖，被评为“年度科技金融公司','date'=>'2016-11-04'),
	array('id'=>'3','name'=>'10月天津用户见面会成功举办','date'=>'2016-10-19'))
);

$p04= array(
'count'=>20,
  'num'=>4,
  'list'=>array(
	array('id'=>'4','name'=>'真融宝董事长吴雅楠告诉你2017投什么','date'=>'2017-1-18'),
	array('id'=>'4','name'=>'11月西南用户见面会成功举办','date'=>'2016-11-21'),
	array('id'=>'4','name'=>'真融宝高管冲走隔壁玄奘之旅，4天112公里，创业砥砺前行','date'=>'2016-11-07'),
	array('id'=>'4','name'=>'11月西南用户见面会成功举办','date'=>'2016-11-21'),
	array('id'=>'4','name'=>'真融宝董事长吴雅楠告诉你2016投什么','date'=>'2016-10-18'))
);



if(empty($id)){
if($page == 1){
	echo json_encode($text01);
}else if($page == 2){
	echo json_encode($text02);
}else if($page == 3){
	echo json_encode($text03);
}else if($page == 4){
  echo json_encode($text04);
}else if($page == 5){
  echo json_encode($text05);
}
else{
	echo json_encode(array('err'=>'加载完毕，没有更多内容了！'));
}
}else{

  if($id == 1){
  	echo json_encode($p01);
  }else if($id == 2){
  	echo json_encode($p02);
  }else if($id == 3){
  	echo json_encode($p03);
  }else if($id == 4){
    echo json_encode($p04);
  } else{
  	echo json_encode(array('err'=>'不存在此ID'));
  }
}

?>
