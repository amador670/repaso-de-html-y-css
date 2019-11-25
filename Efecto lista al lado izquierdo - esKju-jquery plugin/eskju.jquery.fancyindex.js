$( document ).ready( function()
                    {
  $( "body" ).FancyIndex();
});

var ancho = $(window).width();
if (ancho > 800){
  
  $.fn.FancyIndex = function( options )
  {
    new FancyIndex( this, options );
  }

  FancyIndex = function( selector, options )
  {
    this.init( selector, options );
  }

  $.extend( FancyIndex.prototype,
           {
    init : function( selector, options )
    {
      this.selector = $( selector );
      this.items = [];
      this.disabled = false;
      this.lastActivity = 0;
      this.options = $.extend(
        {
          hideWhenInactive: true,
          focusInitally: true,
          focusOnResize: true,
          focusOnScroll: true,
          focusOnHover: true,
          focusTimeout: 50000,
          firstOnly: false,
          forceLastActive: true,
          scrollToDuration: 1000,
          scrollOnClick: true,
          maxPrioritizedItems: 3,
          flipPosition: false
        }, options );

      this.loadHierarchy();
      this.bindSelf();
      this.bindScroll();
      this.bindResize();
      this.bindHover();
      this.updateItems();

      if( this.options.hideWhenInactive )
      {
        if( this.options.focusInitally )
        {
          this.setActive();
        }
        else
        {
          this.hide();
        }
      }
    },

    setActive : function()
    {
      var $this = this;
      $( "#esKju-fancyIndex" ).removeClass( "inactive" );
      $( "#esKju-fancyIndex" ).animate( { minHeight: 0 }, parseInt( this.options.focusTimeout ), function()
                                       {
        $this.hide();
      });
    },

    hide: function()
    {
      if( this.options.hideWhenInactive )
      {
        $( "#esKju-fancyIndex" ).addClass( "inactive" );
      }
    },

    bindSelf: function()
    {
      var $this = this;

      $( "body" ).bind( "refreshFancyIndex", function( e, options )
                       {
        $this.options = options;
      });
    },

    bindScroll : function()
    {
      var $this = this;

      $( window ).scroll( function()
                         {
        $this.updateItems();

        if( $this.options.focusOnScroll )
        {
          $this.setActive();
        }
      });
    },

    bindResize: function()
    {
      var $this = this;

      $( window ).resize( function()
                         {
        $this.updateItems();

        if( $this.options.focusOnResize )
        {
          $this.setActive();
        }
      });
    },

    bindHover: function()
    {
      var $this = this;

      $( "#esKju-fancyIndex" ).hover( function()
                                     {
        if( $this.options.focusOnHover )
        {
          $this.setActive();
        }
      });
    },

    updateItems : function()
    {
      var $this = this;
      var windowTop = $( window ).scrollTop()
      var windowHeight = $( window ).height();
      var firstFound = false;
      var focusedItems = parseInt( this.options.maxPrioritizedItems );
      var lastActive = false;

      $.each( $this.items, function( key, obj )
             {
        $( obj.obj ).removeClass( "active" );
        $( obj.obj ).removeClass( "prioritized" );

        for( i = 1; i <= parseInt( $this.options.maxPrioritizedItems ); i++ )
        {
          $( obj.obj ).removeClass( "priority-" + i );
        }

        if( windowTop > parseInt( obj.offset.top ) + 50 )
        {
          lastActive = $( obj.obj );
        }

        if( ( windowTop <= parseInt( obj.offset.top ) + 50 && windowTop + windowHeight >= parseInt( obj.offset.top ) && ( !$this.options.firstOnly || !firstFound ) ) && ( parseInt( $this.options.maxPrioritizedItems ) == 0 || focusedItems > 0 ) )
        {
          $( obj.obj ).addClass( "active" );
          $( obj.obj ).addClass( "prioritized" );
          $( obj.obj ).addClass( "priority-" + focusedItems );
          firstFound = true;
          focusedItems--;
        }
      });

      if( $this.options.forceLastActive && $( "#esKju-fancyIndex .active" ).length == 0 )
      {
        $( lastActive ).addClass( "active" );
        $( lastActive ).addClass( "prioritized" );
        $( lastActive ).addClass( "priority-" + $this.options.maxPrioritizedItems );
      }
    },

    loadHierarchy : function()
    {
      var $this = this;
      this.items = [];

      esKjuFancyIndex = $( "<ul>" ).attr( "id", "esKju-fancyIndex" ).addClass( ( this.options.flipPosition ? "left" : "right" ) );
      $( "body" ).append( esKjuFancyIndex );

      $( this.selector.find( "h1,h2,h3,h4,h5,h6,h7,section" ) ).each( function( key, obj ) //Aqui añadimos nuevas etiquetas que van a tener el estilo lista index
                                                                     {
        if( $( obj ).attr( "data-fancyindex-hide" ) != "true" )
        {
          var tag = $( obj ).prop( "tagName" ).toLowerCase();
          var content = $( obj ).html();
          var offset = $( obj ).offset();

          if( $( obj ).attr( "data-fancyIndex-title" ) && $( obj ).attr( "data-fancyIndex-title" ) != "" )
          {
            content = $( obj ).attr( "data-fancyIndex-title" );
          }

          var item = $( "<li>" ).addClass( tag ).html( "<div>" + content + "</div>" );
          esKjuFancyIndex.append( item );

          $this.items.push({ 
            offset: offset, 
            obj: item 
          }); 

          if( $this.options.scrollOnClick )
          {
            $( item ).find( "div" ).click( function( )
                                          {
              offset = $( obj ).offset();
              $( "html, body" ).animate({ scrollTop: offset.top }, parseInt( $this.options.scrollToDuration ) );
            });
          }
        }
      });
    }
  });
}; //FIN DEL CODIGO