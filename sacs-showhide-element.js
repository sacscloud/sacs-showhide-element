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
          labelShow:{
              type:String,
              value:"show"
          },
          labelHide:{
              type:String,
              value:"hide"
          }
        },

        listeners:{
            'change':'prueba'
        },

        prueba:function (e) {

            const option = e.target.getAttribute('name');

            if( option === "hide") {
                this.$.content.style.display = "none";
            }else if(option === "show") {
                this.$.content.style.display = "block";
            }
        }
      });