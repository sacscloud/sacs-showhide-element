    /**
     * `sacs-showhide-element`
     * show or hide an element
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */

     'use strict';

    Polymer({
        is:'sacs-showhide-element',

        properties:{
          labelshow:{
              type:String,
              value:"show"
          },
          labelhide:{
              type:String,
              value:"hide"
          },
          show:{
              type: String,
              observer: "_showHideElement"
          }
        },
        _showHideElement:function (option) {
            if( option === "hide") {
                this.$.content.style.display = "none";
            }else if(option === "show") {
                this.$.content.style.display = "block";
            }
        }
      });