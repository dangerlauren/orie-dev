<?php
// No direct access.
defined('_JEXEC') or die;

jimport('joomla.filesystem.file');

JHtml::_('bootstrap.framework');
JHtml::_('behavior.framework', true);
JHtml::_('jquery.framework');

// get params

$app        = JFactory::getApplication();
$doc        = JFactory::getDocument();
$templateparams    = $app->getTemplate(true)->params;
$menu = $app->getMenu()->getActive();
if (is_object($menu)) :
	if ($menu->params->get('pageclass_sfx')) :
		$pageclass = ' class="'.$menu->params->get('pageclass_sfx').'"';
	else :
		$pageclass = NULL;
	endif;
endif;
$doc->addStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,800,700,600,300', $type = 'text/css', $media = 'all');
$doc->addStyleSheet($this->baseurl.'/templates/'.$this->template.'/css/main.css', $type = 'text/css', $media = 'all');
//$doc->addStyleSheet($this->baseurl.'/templates/'.$this->template.'/css/desk.css', $type = 'text/css', $media = 'all and (min-width: 1000px)');
$doc->addStyleSheet($this->baseurl.'/templates/'.$this->template.'/css/tablet.css', $type = 'text/css', $media = 'all and (max-width: 768px)');
$doc->addStyleSheet($this->baseurl.'/templates/'.$this->template.'/css/tablet-small.css', $type = 'text/css', $media = 'all and (max-width: 680px)');
$doc->addStyleSheet($this->baseurl.'/templates/'.$this->template.'/css/mobile.css', $type = 'text/css', $media = 'all and (max-width: 400px)');
$doc->addScript($this->baseurl.'/templates/'.$this->template.'/javascript/orie.js', $type = 'text/javascript');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>" >
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<jdoc:include type="head" />
</head>
<body<?php echo $pageclass;?>>
  <?php include_once("analyticstracking.php") ?>
	<div id="wrapper">
		<div id="mast">
			<jdoc:include type="modules" name="mast" style="none" />
		</div>
		<div id="header">
			<jdoc:include type="modules" name="header" style="none" />
		</div>
		<div id="left">
			<jdoc:include type="modules" name="left" style="none" />
		</div>
		<div id="position-1">
			<jdoc:include type="modules" name="position-1" style="none" />
		</div>
		<div id="position-2">
			<jdoc:include type="modules" name="position-2" style="none" />
		</div>
		<div id="position-3">
			<jdoc:include type="modules" name="position-3" style="none" />
		</div>
		<div id="position-4">
			<jdoc:include type="modules" name="position-4" style="none" />
		</div>
		<div id="position-5">
			<jdoc:include type="modules" name="position-5" style="none" />
		</div>
		<jdoc:include type="message" />
		<jdoc:include type="component" />
		<div id="footer">
			<jdoc:include type="modules" name="footer" style="none" />
		</div>
	</div>
</body>
</html>
