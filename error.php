<?php
defined('_JEXEC') or die;
if (!isset($this->error))
{
	$this->error = JError::raiseWarning(404, JText::_('JERROR_ALERTNOAUTHOR'));
}
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="Nicer.fun 的 404"/>
    <meta name="description" content="你访问的页面找不回来了，但是我们可以一起寻找失踪宝贝"/>
    <meta name="description" content="公益404页面是由腾讯公司员工志愿者自主发起的互联网公益活动。">
    <meta name="keywords" content="404,Nicer的Blog,404 公益计划,404 错误页面,一起寻找失踪宝贝"/>
    <title>寻找失踪宝贝 - 公益 404</title>
    <style>
        .desc a {
            text-align: left;
            font-weight: bold;
            text-decoration: none;
            color: #10D07A;
            margin-left: 10px;
        }

        .desc a:hover {
            color: #0066cc; 
            text-decoration: none;
        }
    </style>
</head>
<body>
<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"
        homePageUrl="/" homePageName="返回 Nicer的Blog 主页"></script>
</body>
</html>