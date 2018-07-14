import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.min"

class RevealItems{
  constructor(els, offset){
    this.itemsToReveal = els;
    this.offsetPercent = offset;
    this.hideInitially();
    this.createWaypoints();
    this.lazyImages = $(".lazyload");
    this.lazyImagesRefresh();
  }

  lazyImagesRefresh(){
    this.lazyImages.on("load", function(){
      return Waypoint.refreshAll();
    });
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(){
    var that = this;
    this.itemsToReveal.each(function(){
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--revealed");
        },
        offset: that.offsetPercent
      });
    });
  }
}

export default RevealItems;
