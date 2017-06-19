;(function() {
  
  $.extend({
    
    card: function(action) {
      var card = $('.esp-card').eq(0);

      if(!(card.length || action)) {
        return;
      }
      
      var main   = $('.esp-card-main', card),
          height = main.height();
      
      if (action === 'loading' && !card.hasClass('loading')) {
        clearClass();


        var loadingHeight = $('.esp-card-status-loading', main).height();
        main.height(height + 'px');

        card.addClass('hasLoading');

        setTimeout(function() {
          main.height(loadingHeight + 'px');
        }, 0);
      }

      if (action === 'success' && !card.hasClass('success')) {
        clearClass();

        var successHeight = $('.esp-card-status-success', main).height();
        main.height(height + 'px');

        card.addClass('hasSuccess');

        setTimeout(function() {
          main.height(successHeight + 'px');
        }, 0);
      }

      if (action === 'error' && !card.hasClass('error')) {
        clearClass();

        var errorHeight = $('.esp-card-status-view', main).height();
        main.height(height + 'px');

        card.addClass('hasError');

        setTimeout(function() {
          main.height(errorHeight + 'px');
        }, 0);
      }

      if (action === 'view') {
        clearClass();

        var viewHeight = $('.esp-card-status-view', main).height();
        main.height(height + 'px');

        setTimeout(function() {
          main.height(viewHeight + 'px');
        }, 0);
      }

      function clearClass() {
        card.removeClass('hasLoading hasSuccess hasError');
      }

    }

  });

})()