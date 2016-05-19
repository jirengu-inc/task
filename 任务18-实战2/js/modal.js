
/*
  用模块定义的方式封装创建了一个对象，把 new Modal 的过程封装到模块里，这样使用者可以直接通过
  Dialog.open()去调用即可
*/



var Dialog = (function(){

  function Modal(){
    this.createDialog();
    this.bindEvent();
  }

  Modal.prototype = {
    defaultOpts: {
      message: '',
      onClose: function(){}
    },

    open: function(opts){
      this.setOpts(opts);
      this.setDialog();
      this.showDialog();
    },

    close: function(){
      this.hideDialog();
    },

    setOpts: function(opts){
      this.opts = {};
      if(typeof opts === 'string'){
         this.opts = $.extend({}, this.defaultOpts, {message: opts});
      }else if (typeof opts === 'object'){
         this.opts = $.extend({}, this.defaultOpts, opts);
      }
    },

    bindEvent: function(){
      var _this = this;
      _this.$dialog.find('.btn-close').on('click', function(e){
        e.preventDefault();
        _this.opts.onClose();
        _this.hideDialog();
      });
    },


    //创建Dialog
    createDialog: function(){
      var tpl = '<div class="dialog" style="display:none">'
                +   '<span class="btn-close">x</span>'
                + '<div class="dialog-overlay"></div>'
                + '<div class="dialog-box">'
              	+   '<div class="dialog-content"><div class="loading"><img src="http://7xpvnv.com2.z0.glb.qiniucdn.com/bc1cbe10-7841-4ee0-a5de-995a256d4dfc.gif"/></div></div>'
              	+ '</div>'
                +'</div>';
      this.$dialog = $(tpl);
      $('body').append(this.$dialog);
    },

    //根据参数设置 Dialog 样式和内容
    setDialog: function(){
      var $dialog = this.$dialog;
      if(this.opts.message){
        $dialog.find('.dialog-content').html(this.opts.message);
      }

    },

    showDialog: function(){
      this.$dialog.show();
    },

    hideDialog: function(){
      this.$dialog.hide();
    }
  };
  return new Modal();
})();
