(function($) {

	function addThumbnailTags() {
		$('.itt-tags').remove();
		$('input.InputfieldFileTagsInput').each(function() {
			var field_name = $(this).closest('.InputfieldImage').attr('id').replace('wrap_Inputfield_', '');
			var grid_image_id = $(this).attr('name').replace('tags_' + field_name, 'file');
			var $grid_image = $('#' + grid_image_id);
			if(!$grid_image.length) return;
			if($(this).val()) {
				// Add tags preview
				var $itt_tags = $('<div class="itt-tags"></div>').appendTo($grid_image.find('.gridImage__overflow'));
				var tags = $(this).val().split(' ');
				$.each(tags, function(index, value) {
					$itt_tags.append('<div class="itt-tag itt-' + value + '">' + value + '</div>')
				});
			}
		});
	}

	$(document).ready(function() {
		addThumbnailTags();
		$(document).on('change', 'input.InputfieldFileTagsInput', addThumbnailTags);
		$(document).on('ajaxComplete', addThumbnailTags);
	});

}(jQuery));
