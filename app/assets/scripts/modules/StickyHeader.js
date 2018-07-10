import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.min";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader{
  constructor(){
    this.siteHeader = $(".site-header");
    this.headerTrigger = $(".large-hero__title");
    this.headerWaypoints();
    this.pageSection = $(".page-section");
    this.anchorTags = $(".primary-nav a");
    this.navWaypoints();
    this.smoothScrolling();
  }

  smoothScrolling(){
    this.anchorTags.smoothScroll();
  };

  headerWaypoints(){
    var that = this;
    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(){
        that.siteHeader.toggleClass("site-header--darker");
      }
    });
  }

  navWaypoints(){
    var that = this;
    this.pageSection.each(function(){
      var currentPage = this;
      new Waypoint({
        element: currentPage,
        handler: function(direction){
          if(direction == "down"){
            var matchLink = currentPage.getAttribute("data-link");
            that.anchorTags.removeClass("current-item");
            $(matchLink).addClass("current-item");
          }
        },
        offset: "70%"
      });

      new Waypoint({
        element: currentPage,
        handler: function(direction){
          if(direction == "up"){
            var matchLink = currentPage.getAttribute("data-link");
            that.anchorTags.removeClass("current-item");
            $(matchLink).addClass("current-item");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
