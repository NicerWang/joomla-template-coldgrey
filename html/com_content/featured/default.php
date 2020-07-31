<?php
defined('_JEXEC') or die;

JHtml::addIncludePath(JPATH_COMPONENT . '/helpers');
JHtml::_('behavior.caption');

?>
<div class="blog-featured" itemscope itemtype="https://schema.org/Blog">

<?php
	$introcount = count($this->intro_items);
	$counter = 0;
?>
<?php if (!empty($this->intro_items)) : ?>
	<?php foreach ($this->intro_items as $key => &$item) : ?>

		<?php
		$rowcount = 1;
		$row = 0;
		?>
		<div class="items-row">
			<div class="item <?php echo $item->state == 0 ? ' system-unpublished' : null; ?>"
				itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
			<?php
					$this->item = &$item;
					echo $this->loadTemplate('item');
			?>
			</div>
			<?php $counter++; ?>
			<?php if (($rowcount == $this->columns) or ($counter == $introcount)) : ?>

		</div>
			<?php endif; ?>
	<?php endforeach; ?>
<?php endif; ?>
  </div>
