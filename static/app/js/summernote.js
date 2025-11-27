jQuery(function(e){
    'use strict';
    
    $(document).ready(function() {
        $('.summernote').summernote();
    });
    $('.summernote').summernote({
        placeholder: '',
        tabsize: 1,
        height: 200,
        toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear']], // ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
        ['fontname', ['fontname']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], // ['height', ['height']],
        ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen']], ['help', ['help']]]
      });
    
  });