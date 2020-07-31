<?php defined('_JEXEC') or die;
$this->setHtml5(true);
$app = JFactory::getApplication();
$menu = $app->getMenu();
$cssFile1 = "templates/coldgrey/css/style.css";
$cssFile2 = "templates/coldgrey/css/index.css";
$cssFile3 = "templates/coldgrey/css/slider.css";
$cssFile4 = "templates/coldgrey/css/modify.css";
$cssFile5 = "templates/coldgrey/css/text.css";
$jsFile1 = "templates/coldgrey/javascript/index.js";
$jsFile2 = "templates/coldgrey/javascript/slider.js";
$jsFile3 = "templates/coldgrey/javascript/assist.js";
$jsFile4 = "templates/coldgrey/javascript/fastclick.js";
$doc = JFactory::getDocument();
$doc->addStyleSheet($cssFile1);
$doc->addStyleSheet($cssFile2);
$doc->addStyleSheet($cssFile3);
$doc->addStyleSheet($cssFile4);
$doc->addStyleSheet($cssFile5);
$doc->addScript($jsFile1);
$doc->addScript($jsFile2);
$doc->addScript($jsFile3);
$doc->addScript($jsFile4);
?>

<!DOCTYPE html>
<head>
    <meta charset='UTF-8'>
    <title>Nicer的Blog</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- bootstrap -->
    <link rel='stylesheet' href='https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css'>
    <script src='https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js'></script>
    <script src='https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js'></script>
    <script src='https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js'></script>

    <jdoc:include type="head" />
    <link rel='stylesheet' href='<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/css/headerDefault.css' id='Hcss'>
</head>
<body>
    <a href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>" id='getFileUrl' style='display:none;'></a>
    <a href="<?php echo $this->baseurl; ?>" id='getBaseUrl' style='display:none;'></a>
    <a href="" id='getSliderStatus' title="<?php echo $this->params->get('UserSlider'); ?>" style='display:none;'></a>
    <a href="" id='getArchiveLink' title="<?php echo $this->params->get('Archive1Link'); ?>!<?php echo $this->params->get('Archive2Link'); ?>!<?php echo $this->params->get('Archive3Link'); ?>!<?php echo $this->params->get('Archive4Link'); ?>!" style='display:none;'></a>
    <header>
        <div class='header-middle'>
            <div class='header-middle-wrap'>
                <a href='http://nicer.fun/'><div class='iconfont icon-home home-button'>&nbsp;首页</div></a>
                <a href='#' class='archive-button'><div class='iconfont icon-file-text2'>&nbsp;归档</div>
                    <span class='archive-menu'>
                        <ul>
                            <li class="<?php echo $this->params->get('Archive1Icon'); ?>" >&nbsp;<?php echo $this->params->get('Archive1Text'); ?></li>
                            <li class="<?php echo $this->params->get('Archive2Icon'); ?>" >&nbsp;<?php echo $this->params->get('Archive2Text'); ?></li>
                            <li class="<?php echo $this->params->get('Archive3Icon'); ?>" >&nbsp;<?php echo $this->params->get('Archive3Text'); ?></li>
                            <li class="<?php echo $this->params->get('Archive4Icon'); ?>" >&nbsp;<?php echo $this->params->get('Archive4Text'); ?></li>
                        </ul>
                    </span>
                </a>
            </div>
        </div>
        <div class='header-left'>
            <img src="<?php echo $this->params->get('logo');?>" alt='Logo'>
            <span><?php echo $this->params->get('title');?></span>
        </div>
        <div class='header-right'>
            <div><a href='javascript:;' class='iconfont icon-cog setting-button'></a></div>
            <span class='setting-menu'>
                <span class='iconfont icon-uniE901 night-button'></span>
                <span class='iconfont icon-leaf green-button'></span>
                <span class='iconfont icon-superscript2 size-up-button'></span>
                <span class='iconfont icon-subscript2 size-down-button'></span>
            </span>
        </div>
    </header>
    <span id='back-to-top-button' class='iconfont icon-arrow-up'></span>

    <section class='container clearfix'>
        <div class='row'>
            <div class='col-lg-7 col-12 nav'>
                <jdoc:include type="modules" name="position-nav"/> 
            </div>
            <div class='col-lg-4 col-12 seachbox'>
                <jdoc:include type="modules" name="position-search"/> 
            </div>
        </div>
        <div class='row' <?php
            if ($menu->getActive() != $menu->getDefault()) {
                echo "style='display:none;'";
            }?>>
            <div class='col-12 col-lg-7'>
                <div class='slider'>
                    <ul id='slider-list-img'>
                        <li style="background-image: url(<?php echo $this->params->get('Slider1Pic')?>);"><a href="<?php echo $this->params->get('Slider1Link')?>"></a></li>
                        <li style="background-image: url(<?php echo $this->params->get('Slider2Pic')?>);"><a href="<?php echo $this->params->get('Slider2Link')?>"></a></li>
                        <li style="background-image: url(<?php echo $this->params->get('Slider3Pic')?>);"><a href="<?php echo $this->params->get('Slider3Link')?>" target="_Blank"></a></li>
                    </ul>
                    <span id='slider-left-button' class='iconfont icon-circle-left'></span>
                    <span id='slider-right-button' class='iconfont icon-circle-right'></span>
                    <ul id='slider-list-point'></ul>
                </div>
            </div>
            <div class='col-12 col-lg-4 classes'>
                <ul>
                    <li><a href="<?php echo $this->params->get('Classes1Link'); ?>"><img src='<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/images/Bannar1.jpg' alt=''></a></li>
                    <li><a href="<?php echo $this->params->get('Classes2Link'); ?>"><img src='<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/images/Bannar2.jpg' alt=''></a></li>
                    <li><a href="<?php echo $this->params->get('Classes3Link'); ?>"><img src='<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/images/Bannar3.jpg' alt=''></a></li>
                    <li><a href="<?php echo $this->params->get('Classes4Link'); ?>"><img src='<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/images/Bannar4.jpg' alt=''></a></li>
                </ul>
            </div>
        </div>
        <div class='row' <?php
            if ($menu->getActive() != $menu->getDefault()) {
                echo 'style="display:none;"';
            }?>>
            <div class='col-12 col-lg-7' id='mainstream-s'>
              <jdoc:include type="component" />
            </div>
            <div class='col-12 col-lg-4 pos-right'>
                <jdoc:include type="modules" name="position-right"/> 
            <h1>站长的话</h1>
            <br>
            <p>
            <?php 
                $str = $this->params->get('Reminder');
			    $newstr = str_replace(';','<br>',$str);
				echo $newstr;
			?>
            </p>
            </div>
        </div>
        <div class='row' <?php
            if ($menu->getActive() == $menu->getDefault()) {
                echo 'style="display:none;"';
            }?>>
            <div class='col-12 col-lg-12' id='mainstream-l'>
                <jdoc:include type="component" />
            </div>
        </div>
    </section>
    <footer class='container_fluid'>
        <span>鲁ICP备20028219号</span>
    </footer>
</body>
</html>
